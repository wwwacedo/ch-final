import { Exercicio, Treino } from './model.js';

export function criarOptions(elemento, array) {
	for (const item of array) {
		const $option = document.createElement('option');
		$option.setAttribute('value', item);
		$option.textContent = item;
		elemento.appendChild($option);
	}
}

export function criarOptionVazio(elemento) {
	const $option = document.createElement('option');
	$option.setAttribute('value', '');
	$option.textContent = 'Selecione...';
	elemento.appendChild($option);
}

export function atualizarIndice(elemento, array) {
	elemento.textContent = array.length + 1;
}

export function limparForm(form) {
	form.reset();
}

export function criarExercicio({ nome, grupo, subgrupo, equipamento, series, reps, peso, descanso }) {
	return new Exercicio(
		nome,
		grupo,
		subgrupo,
		equipamento,
		series,
		reps,
		peso,
		descanso
	);
}

export function criarCardExercicio({ nome, grupo, subgrupo, equipamento, series, reps, peso, descanso }) {
	const $card = document.createElement('card-exercicio');
	const attributes = { nome, grupo, subgrupo, equipamento, series, reps, peso, descanso };

	for (const [key, value] of Object.entries(attributes)) {
		$card.setAttribute(key, value.toString());
	}

	return $card;
}

export function criarTreino(nome, exercicios) {
	return new Treino(nome.toUpperCase(), exercicios);
}

export function criarCardTreino(elemento, treino, callback) {
	const $card = document.createElement('div');
	$card.classList.add('card-treino');

	const cardTitulo = document.createElement('div');
	cardTitulo.classList.add('card-titulo');

	const titulo = document.createElement('h4');
	titulo.textContent = treino.nome;
	cardTitulo.appendChild(titulo);

	const icone = document.createElement('i');
	icone.classList.add('fa-solid');
	icone.classList.add('fa-chevron-down');

	icone.addEventListener('click', () => {
		icone.classList.toggle('rotacionar-180');
		cardExercicios.classList.toggle('invisivel');
	})

	cardTitulo.appendChild(icone);

	$card.appendChild(cardTitulo);

	const cardExercicios = document.createElement('div');
	cardExercicios.classList.add('card-treino-exercicios');
	cardExercicios.classList.add('invisivel');

	for (const exercicio of treino.exercicios) {
		const $cardExercicio = criarCardExercicio(exercicio);
		cardExercicios.appendChild($cardExercicio);
	}

	const $botaoApagar = document.createElement('button');
	$botaoApagar.classList.add('apagar-treino');
	$botaoApagar.addEventListener('click', callback);
	$botaoApagar.textContent = 'EXCLUIR TREINO';

	cardExercicios.appendChild($botaoApagar);

	$card.appendChild(cardExercicios);

	elemento.appendChild($card);
}

// Verifica se já existe um treino com esse nome
export function verificarTreino(treinos, nome) {
	return treinos.some(treino => treino.nome === nome);
}

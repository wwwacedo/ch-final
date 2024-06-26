import {
	criarOptions,
	criarOptionVazio,
	atualizarIndice,
	criarExercicio,
	criarCardExercicio,
	criarTreino,
	criarCardTreino,
	verificarTreino,
	limparForm
} from './controllers.js';

import '../nav/nav.js';
import { activeModal } from '../modal/modal.js';
import { acionaAlert } from '../alert/alert.js';

const MENSAGEM = {
	ERRO: {
		SEM_EXERCICIOS: 'Adicione exercícios ao treino',
		NOME_TREINO_EXISTE: 'Já existe um treino com esse nome'
	},
	SUCESSO: {
		EXERCICIO_CRIADO: 'Exercício criado com sucesso!',
		TREINO_CRIADO: 'Treino criado com sucesso!'
	}
}

const GRUPOS = ['superior', 'inferior', 'core'];

const SUBGRUPOS = {
	superior: ['braço (geral)', 'bíceps', 'tríceps', 'peito', 'costas', 'ombros'],
	inferior: ['perna (geral)', 'quadríceps', 'posterior', 'glúteos', 'panturrilha'],
	core: ['core (geral)', 'abdômen', 'lombar']
};

const EQUIPAMENTO = ['sem equipamento', 'elástico', 'dumbbells', 'barbells', 'kettlebell', 'anilha', 'barra', 'máquina'];

let exercicios = [];
let treinos = [];

const $form = document.querySelector('form');
const $inputs = $form.elements;


// elementos do form cujos options são criados ao iniciar 
const $selectGrupo = $inputs['grupo'];
const $selectSubgrupo = $inputs['subgrupo'];
const $selectEquipamento = $inputs['equipamento'];

// elementos fora do form
const $exercicioIndice = $form.querySelector('#exercicio-indice');
const $nomeTreino = document.querySelector('#nome-treino');
const $btnSalvar = document.querySelector('#salvar-treino');
const $cardsExercicios = document.querySelector('#cards-exercicios');
const $cardsTreinos = document.querySelector('#cards-treinos');
const $cardSemTreino = document.querySelector('#sem-treinos');

// erro
const $nomeTreinoError = document.querySelector('#nome-treino-error');

// alert
const $alert = document.querySelector('#alert');


$form.addEventListener('submit', function (e) {
	e.preventDefault();
	const formData = new FormData($form);

	const data = Object.fromEntries(formData);
	const exercicio = criarExercicio(data);

	exercicios = [...exercicios, exercicio];

	const cardExercicio = criarCardExercicio(exercicio);
	$cardsExercicios.appendChild(cardExercicio);
	atualizarIndice($exercicioIndice, exercicios);
	limparForm($form);
	acionaAlert($alert, MENSAGEM.SUCESSO.EXERCICIO_CRIADO, 'success');

});


$selectGrupo.addEventListener('change', function () {
	$selectSubgrupo.innerHTML = '';
	criarOptionVazio($selectSubgrupo);
	if ($selectGrupo.value) {
		criarOptions($selectSubgrupo, SUBGRUPOS[$selectGrupo.value]);
	}
});


$btnSalvar.addEventListener('click', function () {
	if ($nomeTreino.value === '') {
		$nomeTreinoError.classList.remove('invisivel');
		return;
	}

	if (!exercicios.length) {
		acionaAlert($alert, MENSAGEM.ERRO.SEM_EXERCICIOS, 'error');
		return;
	}

	if (verificarTreino(treinos, $nomeTreino.value)) {
		acionaAlert($alert, MENSAGEM.ERRO.NOME_TREINO_EXISTE, 'error');
		return;
	}

	const treino = criarTreino($nomeTreino.value, exercicios);
	treinos.push(treino);
	criarCardTreino($cardsTreinos, treino);
	exercicios = [];
	atualizarIndice($exercicioIndice, exercicios);
	$cardsExercicios.innerHTML = '';
	limparForm($form);
	$nomeTreino.value = '';
	$cardsTreinos.classList.remove('invisivel');
	$cardSemTreino.classList.add('invisivel');
	acionaAlert($alert, MENSAGEM.SUCESSO.TREINO_CRIADO, 'success');
});


$nomeTreino.addEventListener('focus', function () {
	$nomeTreinoError.classList.add('invisivel');
})


criarOptions($selectGrupo, GRUPOS);
criarOptions($selectEquipamento, EQUIPAMENTO);
atualizarIndice($exercicioIndice, exercicios);


treinos.length === 0 && $cardsTreinos.classList.add('invisivel');


$cardsTreinos.addEventListener('click', async function (e) {
  const elementoClicado = e.target;
  const ehParaDeletar = elementoClicado.classList.contains('apagar-treino');

	
  if (ehParaDeletar) {
		
		const resposta = await activeModal('Deseja realmente deletar o treino?');
		
		if (!resposta) return;

    const parentCard = elementoClicado.closest('.card-treino');
    const nomeTreino = parentCard.querySelector('h4').textContent;

    treinos = treinos.filter(treino => treino.nome !== nomeTreino);

    parentCard.remove();

    if (treinos.length === 0) {
      $cardsTreinos.classList.add('invisivel');
      $cardSemTreino.classList.remove('invisivel');
    }
  }
});


document.body.onload = setTimeout(() => {
	document.querySelector('main').classList.remove('invisivel');
	document.querySelector('.loader').classList.add('invisivel');
}, 1000);


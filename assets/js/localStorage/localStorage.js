export function salvarTreino(treino) {
	localStorage.setItem('treino', JSON.stringify(treino));
}

export function obterTreino(key = 'treino') {
	return JSON.parse(localStorage.getItem(key));
}

export function removerTreino(nomeTreino) {
	let treinos = obterTreino();
	treinos = treinos.filter(treino => treino.nome !== nomeTreino);
	salvarTreino(treinos);
}
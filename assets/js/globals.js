// global variables
const treinosSalvos = JSON.parse(localStorage.getItem('treino')) || [];
let treinos = [];
let exercicios = [];

if (treinosSalvos.length > 0) {
	treinos = treinosSalvos;
}
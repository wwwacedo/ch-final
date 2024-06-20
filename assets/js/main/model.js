export class Exercicio {
	constructor(nome, grupo, subgrupo, equipamento, series, reps, peso, descanso) {
		this.nome = nome;
		this.grupo = grupo;
		this.subgrupo = subgrupo;
		this.equipamento = equipamento;
		this.series = series;
		this.reps = reps;
		this.peso = peso;
		this.descanso = descanso;
	}
} 

export class Treino {
	constructor(nome, exercicios) {
		this.nome = nome;
		this.exercicios = exercicios;
	}
}
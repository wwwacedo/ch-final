import { Route, router } from './router.js';
import "./components/links.js";

document.addEventListener('DOMContentLoaded', () => {
	const inicio = new Route('Inicio', '/', '/routes/inicio.html');
	const novoTreino = new Route('Novo Treino', '/novo-treino', '/routes/novo-treino.html');

	router.addRoute(inicio);
	router.addRoute(novoTreino);

	router.loadRoute(inicio);
});
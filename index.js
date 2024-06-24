import { Route, router } from './router.js';
import "./assets/components/card-exercicio.js";
import "./assets/components/link.js";

// carregar as rotas após o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
	// criar as rotas
	const inicio = new Route('Inicio', '/', '/routes/inicio.html');
	const sugestoes = new Route('Sugestões', '/sugestoes', '/routes/sugestoes.html');
	const novoTreino = new Route('Novo Treino', '/novo-treino', '/routes/novo-treino.html');

	// adicionar as rotas
	router.addRoute(inicio);
	router.addRoute(sugestoes);
	router.addRoute(novoTreino);

	// carregar a rota inicial
	router.loadRoute(inicio);
});



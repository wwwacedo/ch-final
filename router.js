// Classe que representa uma rota
export class Route {
	constructor(title, url, filepath) {
		this.title = title;
		this.url = url;
		this.filepath = filepath;
	}
}

// Classe que representa o roteador
class Router {
	constructor() {
		this.routes = [];
	}

	// Adiciona uma nova rota
	addRoute(route) {
		if (!(route instanceof Route)) throw new Error('Route must be an instance of Route class');
		this.routes.push(route);
	}

	// Carrega uma rota
	loadRoute(route) {
		fetch(route.filepath)
			.then(response => response.text())
			.then(html => {
				const root = document.getElementById('root');
				root.innerHTML = html;

				// Encontra o elemento script na nova pagina
				const oldScript = root.querySelector('script');

				// Cria um novo elemento script
				const newScript = document.createElement('script');

				// Define o tipo de script como 'module'
				newScript.setAttribute('type', 'module');

				// Copia o conteúdo do elemento script existente
				newScript.textContent = oldScript.textContent;

				// Substitui o elemento script existente pelo novo
				oldScript.parentNode.replaceChild(newScript, oldScript);
			})
			.catch(error => {
				console.error(error);
			});
	}

	// Busca uma rota pelo seu URL
	findRouteByUrl(url) {
		return this.routes.find(route => route.url === url);
	}

	// Redireciona para uma rota
	push(url) {
		const route = this.findRouteByUrl(url);
		window.history.pushState({}, route.title, route.url);
		this.loadRoute(route);
	}
}

export const router = new Router();

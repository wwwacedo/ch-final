export class Route {
	constructor(title, url, filepath) {
		this.title = title;
		this.url = url;
		this.filepath = filepath;
	}
}

class Router {
	constructor() {
		this.routes = [];
	}

	addRoute(route) {
		if (!(route instanceof Route)) throw new Error('Route must be an instance of Route class');
		this.routes.push(route);
	}

	loadRoute(route) {
		fetch(route.filepath)
			.then(response => response.text())
			.then(html => {
				const root = document.getElementById('root');
				root.innerHTML = html;

				// Find all script tags in the response
				const oldScript = root.querySelector('script');

				const newScript = document.createElement('script');

				// Copy all attributes from the old script to the new script
				Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));

				// If the script has content, copy it
				newScript.textContent = oldScript.textContent;

				// Replace the old script with the new script in the DOM
				oldScript.parentNode.replaceChild(newScript, oldScript);
			})
			.catch(error => {
				console.error(error);
			});
	}

	findRouteByUrl(url) {
		return this.routes.find(route => route.url === url);
	}

	push(url) {
		const route = this.findRouteByUrl(url);
		window.history.pushState({}, route.title, route.url);
		this.loadRoute(route);
	}
}

export const router = new Router();

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
		// console.log(route.filepath);
    fetch(route.filepath)
      .then(response => response.text())
      .then(html => {
        document.getElementById('root').innerHTML = html;
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

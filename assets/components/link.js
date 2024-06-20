import { router } from '../router.js';

class Link extends HTMLElement {
	constructor() {
		super();
		this.href = this.getAttribute('href');
	}

	handleClick(event) {
		event.preventDefault();
		router.push(this.href);
	}

	connectedCallback() {
		this.addEventListener('click', (e) => this.handleClick(e));
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `<a href="${this.href}"><slot></slot></a>`
	}

	disconnectedCallback() {
		this.removeEventListener('click', (e) => this.handleClick(e));
	}
}

customElements.define('app-link', Link);
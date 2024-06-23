import { router } from '../../router.js';

// Classe que representa um <nav-link>
class Link extends HTMLElement {
	constructor() {
		super();
		this.href = this.getAttribute('href');
	}

	// Evento de clique
	handleClick(event) {
		event.preventDefault();
		router.push(this.href);

		document.querySelectorAll('nav-link').forEach((link) => {
			if (link.shadowRoot) {
				const anchor = link.shadowRoot.querySelector('a');
				anchor.classList.remove('ativo');
			}
		});

		if (this.shadowRoot) {
			const anchor = this.shadowRoot.querySelector('a');
			anchor.classList.add('ativo');
		}
	}

	connectedCallback() {
		this.addEventListener('click', (e) => this.handleClick(e));
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
      <style>
        /* Example styles */
        a {
          text-decoration: none;
          padding: .7rem 1rem;  
          color: var(--text-primary-color);
          font-weight: bold;
          border-radius: 4px;
          transition: all 0.3s;
        }

        a:hover {
          cursor: pointer;
          color: var(--yellow);
        }

        a.ativo {
          background-color: var(--bg);
          color: var(--yellow);
        }
      </style>
      <a href="${this.href}" class="${this.getAttribute('class')}"><slot></slot></a>
    `;
	}

	disconnectedCallback() {
		this.removeEventListener('click', (e) => this.handleClick(e));
	}
}

customElements.define('nav-link', Link);
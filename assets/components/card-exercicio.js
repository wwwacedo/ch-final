import { SVG_FIRE, SVG_REPEAT, SVG_DUMBELL, SVG_CLOCK } from '../utils/icons.js';

class CardExercicio extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = `
      <style>
				p {
					margin: 0;
					display: flex;
					align-items: center;
					gap: 10px;
				}

        .card-exercicio {
          margin: 0.5rem 0;
  				display: flex;
  				flex-direction: column;
  				gap: 10px;
  				min-width: 300px;
  				padding: 20px;
  				border-radius: 8px;
  				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  				background-color: var(--bg-card);
  				color: var(--text-primary-color);
        }

				.card-exercicio__titulo {
					font-size: 1.2em;
				}

				.card-exercicio__subtitulo {
					font-size: .8em;
					color: var(--text-secondary-color);
				}

				.card-exercicio__info {
					padding-top: 20px;
				}

				.card-exercicio__info p {
				  font-size: 1em;
				  line-height: 1.4;
					color: var(--text-primary-color);
				}

				svg {
					width: 14px;
					height: 14px;
				}
					
      </style>
      <div class="card-exercicio">
        <div>
          <p class="card-exercicio__titulo">${this.getAttribute('nome').toUpperCase()}</p>
          <p class="card-exercicio__subtitulo">${this.getAttribute('grupo')} > ${this.getAttribute('subgrupo')} > ${this.getAttribute('equipamento')}</p>
          <div class="card-exercicio__info">
            <p class="card-exercicio__subtitulo">${SVG_FIRE} ${this.getAttribute('series')} séries</p>
						<p class="card-exercicio__subtitulo">${SVG_REPEAT} ${this.getAttribute('reps')} reps</p>
						<p class="card-exercicio__subtitulo">${SVG_DUMBELL} ${this.getAttribute('peso')} kg</p>
						<p class="card-exercicio__subtitulo">${SVG_CLOCK} ${this.getAttribute('descanso')} segundos</p>
          </div>
        </div>
      </div>
    `;

	}
}

customElements.define('card-exercicio', CardExercicio);
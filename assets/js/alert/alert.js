let alertTimeouts = [];

export function acionaAlert(elemento, mensagem, tipo) {
    alertTimeouts.forEach(clearTimeout);
    alertTimeouts = [];

    elemento.classList.remove('slideDown', 'slideUp', 'error', 'success', 'invisivel');
    elemento.textContent = '';

    elemento.classList.add('slideDown', tipo);
    elemento.textContent = mensagem;

		elemento.addEventListener('click', function () {
			elemento.classList.remove('slideDown', tipo);
			elemento.classList.add('slideUp');
			elemento.textContent = '';
		});

    alertTimeouts.push(setTimeout(function () {
        elemento.classList.remove('slideDown');
        elemento.classList.add('slideUp');
    }, 3000));

    alertTimeouts.push(setTimeout(function () {
        elemento.classList.remove('slideUp', tipo);
        elemento.classList.add('invisivel');
    }, 3500));
}


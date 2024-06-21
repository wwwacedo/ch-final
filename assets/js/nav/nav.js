// const navLinks = document.querySelectorAll('nav ul li a');
// const [inicioNavLink, novoTreinoNavLink] = navLinks;
// const inicioSection = document.querySelector('#inicio');
// const novoTreinoSection = document.querySelector('#novo-treino');
// const $btnPrimeiroTreino = document.querySelector('#primeiro-treino');


// const toggleSections = (sectionToShow, sectionToHide) => {
//     sectionToShow.classList.remove('invisivel');
//     sectionToHide.classList.add('invisivel');
// }


// const toggleNavLinks = (linkToActivate, linkToDeactivate) => {
//     linkToActivate.classList.add('ativo');
//     linkToDeactivate.classList.remove('ativo');
// }


// inicioNavLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     toggleSections(inicioSection, novoTreinoSection);
//     toggleNavLinks(inicioNavLink, novoTreinoNavLink);
// });

// novoTreinoNavLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     toggleSections(novoTreinoSection, inicioSection);
//     toggleNavLinks(novoTreinoNavLink, inicioNavLink);
// });

// $btnPrimeiroTreino.addEventListener('click', (e) => {
//     e.preventDefault();
//     toggleSections(novoTreinoSection, inicioSection);
//     toggleNavLinks(novoTreinoNavLink, inicioNavLink);
// });


document.addEventListener('DOMContentLoaded', () => {
	const navLinks = document.querySelectorAll('nav-link');

	console.log(navLinks);

	navLinks.forEach(link => {
			link.addEventListener('click', (event) => {
					// Prevent the default anchor click behavior
					event.preventDefault();

					// Remove 'ativo' class from all nav-links
					navLinks.forEach(lnk => lnk.classList.remove('ativo'));

					// Add 'ativo' class to the clicked nav-link
					// Note: This assumes nav-link elements can handle classList, which custom elements can if they render standard elements internally
					link.classList.add('ativo');

					// Optional: Navigate to the href attribute value if needed
					// window.location.href = link.getAttribute('href');
			});
	});
});
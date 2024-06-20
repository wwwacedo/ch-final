const navLinks = document.querySelectorAll('nav ul li a');
const [inicioNavLink, novoTreinoNavLink] = navLinks;
const inicioSection = document.querySelector('#inicio');
const novoTreinoSection = document.querySelector('#novo-treino');
const $btnPrimeiroTreino = document.querySelector('#primeiro-treino');


const toggleSections = (sectionToShow, sectionToHide) => {
    sectionToShow.classList.remove('invisivel');
    sectionToHide.classList.add('invisivel');
}


const toggleNavLinks = (linkToActivate, linkToDeactivate) => {
    linkToActivate.classList.add('ativo');
    linkToDeactivate.classList.remove('ativo');
}


inicioNavLink.addEventListener('click', (e) => {
    e.preventDefault();
    toggleSections(inicioSection, novoTreinoSection);
    toggleNavLinks(inicioNavLink, novoTreinoNavLink);
});

novoTreinoNavLink.addEventListener('click', (e) => {
    e.preventDefault();
    toggleSections(novoTreinoSection, inicioSection);
    toggleNavLinks(novoTreinoNavLink, inicioNavLink);
});

$btnPrimeiroTreino.addEventListener('click', (e) => {
    e.preventDefault();
    toggleSections(novoTreinoSection, inicioSection);
    toggleNavLinks(novoTreinoNavLink, inicioNavLink);
});
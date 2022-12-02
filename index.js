const buttonMenu = document.querySelector('#menu-mob');
const mobileMenu = document.querySelector('#menu');

buttonMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('header__hidden-mobile');
})
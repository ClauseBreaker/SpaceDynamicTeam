const burger = document.querySelector('.site-header__burger');
const mobileMenu = document.querySelector('.site-header__mobile-container');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});
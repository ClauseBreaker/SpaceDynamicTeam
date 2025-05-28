
document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.querySelector('.site-header__burger');
    const mobileMenu = document.querySelector('.site-header__mobile-nav');

    burgerButton.addEventListener('click', function () {
        burgerButton.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });
});



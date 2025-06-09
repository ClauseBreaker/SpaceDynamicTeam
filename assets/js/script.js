const burger = document.querySelector('.site-header__burger');
const mobileMenu = document.querySelector('.site-header__mobile-container');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});
const header = document.querySelector('.site-header');
const aboutSection = document.getElementById('about');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const triggerPoint = aboutSection.offsetTop;

    if (scrollY >= triggerPoint - 1) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.site-header__link, .site-header__mobile-link');

function updateActiveLink() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140; // Adjusted for header height
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

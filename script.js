document.addEventListener('DOMContentLoaded', () => {
    // ======================
    // SWIPER
    // ======================
    const sliderElement = document.querySelector('.home-swiper, .swiper');

    if (sliderElement && typeof Swiper !== 'undefined') {
        new Swiper(sliderElement, {
            loop: true,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            speed: 800,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // ======================
    // MENU MOBILE
    // ======================
    const toggle = document.querySelector('.menu-toggle, .hamburger');
    const mobileMenu = document.querySelector('.mobile-nav, .dropdown-menu');

    if (toggle && mobileMenu) {
        toggle.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open') || mobileMenu.classList.toggle('show');
            toggle.setAttribute(
                'aria-expanded',
                mobileMenu.classList.contains('open') || mobileMenu.classList.contains('show')
            );
        });
    }
});
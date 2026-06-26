import '../scss/style.scss';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules'

Swiper.use([Pagination])

console.log('It works!');

document.addEventListener('DOMContentLoaded', () => {

    // 1. Первый грид (Бренды)
    const brandButton = document.getElementById('showAllBrands');      
    const brandGrid = document.getElementById('brandGrid');

    if (brandButton && brandGrid) {
        brandButton.addEventListener('click', () => {
            brandGrid.classList.toggle('brands-grid-container__grid--expanded');
            brandButton.classList.toggle('brands-grid-container__show-more--active');

            if (brandGrid.classList.contains('brands-grid-container__grid--expanded')) {
                brandButton.textContent = 'Скрыть';
            } else {
                brandButton.textContent = 'Показать все';
            }
        });
    }

    // 2. Второй грид (Сервисы)
    const serviceButton = document.getElementById('showAllServices');      
    const serviceGrid = document.getElementById('serviceGrid');

    if (serviceButton && serviceGrid) {
        serviceButton.addEventListener('click', () => {
            serviceGrid.classList.toggle('service-grid-container__grid--expanded');
            serviceButton.classList.toggle('service-grid-container__show-more--active');

            if (serviceGrid.classList.contains('service-grid-container__grid--expanded')) {
                serviceButton.textContent = 'Скрыть';
            } else {
                serviceButton.textContent = 'Показать все';
            }
        });
    }

    // 3. Первый слайдер (Бренды)
    const swiperContainer1 = document.querySelector('.brands-slider');
    if (swiperContainer1) {
        const swiperInstance1 = new Swiper('.brands-slider', {
            slidesPerView: 'auto', 
            spaceBetween: 16,
            pagination: {
                el: '.first-swiper-pagination',
                clickable: true,
            },
        });
    }

    // 4. Второй слайдер (Сервисы)
    const swiperContainer2 = document.querySelector('.service-slider');
    if (swiperContainer2) {
        const swiperInstance2 = new Swiper('.service-slider', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.second-swiper-pagination',
                clickable: true,
            },
        });
    }

    // 5. Третий слайдер (цены)
    const swiperContainer3 = document.querySelector('.price-slider');
    if (swiperContainer3) {
        const swiperInstance3 = new Swiper('.price-slider', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.third-swiper-pagination',
                clickable: true,
            },
        });
    }

    // 6. Сайдбар 
    const burgerButton = document.querySelector('.header__burger'); 
    const sidebar = document.querySelector('.sidebar');
    const closeButton = document.querySelector('.sidebar__close');
    const overlay = document.querySelector('.overlay'); 

    const openSidebar = () => {
        sidebar.classList.add('sidebar--open');
        if (overlay) overlay.classList.add('overlay--active');
        document.body.style.overflow = 'hidden';
    };

    const closeSidebar = () => {
        sidebar.classList.remove('sidebar--open');
        if (overlay) overlay.classList.remove('overlay--active');
        document.body.style.overflow = ''; 
    };

    if (burgerButton && sidebar) {
        burgerButton.addEventListener('click', openSidebar);
    }

    if (closeButton) {
        closeButton.addEventListener('click', closeSidebar);
    }

    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }
});
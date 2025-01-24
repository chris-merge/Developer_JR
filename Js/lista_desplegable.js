// Activar el menú hamburguesa en móviles
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".navbar-burger");
    const menu = document.querySelector("#navbarMenu");

    burger.addEventListener("click", () => {
        burger.classList.toggle("is-active");
        menu.classList.toggle("is-active");
    });
});

//carrusel
const imagesContainer = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    imagesContainer.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});
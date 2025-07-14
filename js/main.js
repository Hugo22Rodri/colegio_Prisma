// Navegación móvil
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

//  Cambio de estilo en header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

//  Carrusel
const imageTrack = document.querySelector('.carousel-track');
const imageDots = document.querySelectorAll('.slider-dot');
let currentImage = 0;

if (imageTrack && imageDots.length > 0) {
    function showImageSlide(n) {
        imageTrack.style.transform = `translateX(-${n * 100}%)`;
        imageDots.forEach(dot => dot.classList.remove('active'));
        imageDots[n].classList.add('active');
        currentImage = n;
    }

    imageDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showImageSlide(index);
        });
    });

    setInterval(() => {
        currentImage = (currentImage + 1) % imageDots.length;
        showImageSlide(currentImage);
    }, 5000);
}

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Aquí podrías enviar los datos del formulario con fetch()
        alert('¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

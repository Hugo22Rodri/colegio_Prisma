// Navegación móvil
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}

// Cambio de header al hacer scroll
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

// Carrusel de testimonios (Solo se ejecuta si existen los elementos)
const slides = document.querySelector('.testimonial-slides');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

if (slides && dots.length > 0) {
    function showSlide(n) {
        slides.style.transform = `translateX(-${n * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[n].classList.add('active');
        currentSlide = n;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Cambio automático de slides
    setInterval(() => {
        currentSlide = (currentSlide + 1) % dots.length;
        showSlide(currentSlide);
    }, 5000);
}


// Manejo del formulario de contacto (Si existe un formulario con el ID 'contactForm')
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío predeterminado del formulario

        // Aquí podrías agregar lógica para enviar los datos del formulario,
        // por ejemplo, usando fetch() para enviar a un backend.
        // Por ahora, solo mostraremos un mensaje de éxito.

        alert('¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.');

        // Opcional: Resetear el formulario después del envío
        contactForm.reset();
    });
}
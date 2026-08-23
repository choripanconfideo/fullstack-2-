// 1. EFECTO DE MÁQUINA DE ESCRIBIR PARA EL SUBTÍTULO
const subtitle = document.querySelector('.subtitle');
const textToType = subtitle.textContent;
subtitle.textContent = ''; // Limpiamos el texto inicial

let i = 0;
function typeWriter() {
    if (i < textToType.length) {
        subtitle.textContent += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Velocidad de escritura (100ms)
    }
}

// Iniciamos el efecto cuando carga la página
window.onload = () => {
    typeWriter();
};


// 2. ANIMACIÓN DE APARICIÓN AL HACER SCROLL (INTERSECTION OBSERVER)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Se activa cuando el 10% del elemento es visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Añadimos una clase para activar la animación en CSS
            entry.target.classList.add('show-element');
            // Dejamos de observar el elemento una vez que ya apareció
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Seleccionamos todas las tarjetas que queremos animar
const cardsToAnimate = document.querySelectorAll('.skill-card, .project-card');

// Le decimos al observador que vigile cada tarjeta
cardsToAnimate.forEach(card => {
    // Les agregamos la clase oculta por defecto al cargar JS
    card.classList.add('hidden-element');
    observer.observe(card);
});
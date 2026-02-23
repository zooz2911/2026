document.addEventListener('DOMContentLoaded', () => {
    // Animación al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.small-card, .featured-news, .newsletter-block');
    elements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Feedback en botones al hacer clic (también para táctil)
    const buttons = document.querySelectorAll('button, .btn-read-black');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => btn.style.transform = 'scale(0.95)');
        btn.addEventListener('mouseup', () => btn.style.transform = 'scale(1.1)');
        btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
        // Para dispositivos táctiles
        btn.addEventListener('touchstart', () => btn.style.transform = 'scale(0.95)');
        btn.addEventListener('touchend', () => btn.style.transform = 'scale(1.1)');
        btn.addEventListener('touchcancel', () => btn.style.transform = 'scale(1)');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Animación al hacer scroll: activa cuando entra, desactiva cuando sale
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2, rootMargin: '0px' });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
        observer.observe(el);
    });

    // Feedback en botones al hacer clic (incluye botones profesionales)
    const buttons = document.querySelectorAll('button, .btn-read-black, .btn-professional');
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

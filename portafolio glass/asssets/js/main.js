document.addEventListener('DOMContentLoaded', function() {
    // Inicializar partículas
    if (typeof particlesJS === 'function') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80 },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5 },
                size: { value: 3 },
                line_linked: { enable: true, distance: 150 },
                move: { enable: true, speed: 2 }
            }
        });
    }

    // Menú hamburguesa
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    if (burger && navLinks) {
        burger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                if (navLinks) navLinks.classList.remove('active');
            }
        });
    });
});
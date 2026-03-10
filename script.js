// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar aviso de cookies após 2 segundos
    setTimeout(showCookieNotice, 2000);
    
    // Adicionar animações de scroll
    initScrollAnimations();
    
    // Navbar transparente no topo
    initNavbarScroll();
    
    // Smooth scroll para links internos
    initSmoothScroll();
    
    // Iniciar carrossel automaticamente
    initCarousel();
    
    // Contador animado nas estatísticas
    animateCounters();
});

// Função para mostrar aviso de cookies
function showCookieNotice() {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
        document.getElementById('cookieNotice').classList.add('show');
    }
}

// Função para aceitar cookies
function acceptCookies() {
    localStorage.setItem('cookieAccepted', 'true');
    document.getElementById('cookieNotice').classList.remove('show');
}

// Navbar com efeito de scroll
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(13, 110, 253, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = '';
            navbar.style.backdropFilter = '';
        }
    });
}

// Smooth scroll para links internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar links que não sejam para âncoras válidas
            if (href === '#' || href === '#login') {
                if (href === '#login') {
                    e.preventDefault();
                    alert('Funcionalidade de login em desenvolvimento!');
                }
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Inicializar carrossel
function initCarousel() {
    const carousel = document.querySelector('#carouselPrincipal');
    if (carousel) {
        // Bootstrap já inicializa o carrossel automaticamente
        // Adicionar controles de teclado
        document.addEventListener('keydown', function(e) {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                if (e.key === 'ArrowLeft') {
                    bsCarousel.prev();
                } else if (e.key === 'ArrowRight') {
                    bsCarousel.next();
                }
            }
        });
    }
}

// Animações de scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loading');
                
                // Se for card de estatística, animar o contador
                if (entry.target.classList.contains('stat-card')) {
                    const counter = entry.target.querySelector('h3');
                    if (counter && !counter.classList.contains('counted')) {
                        animateCounter(counter);
                    }
                }
            }
        });
    }, observerOptions);
    
    // Observar cards de cursos
    document.querySelectorAll('.curso-card, .video-card, .stat-card').forEach(card => {
        observer.observe(card);
    });
}

// Animar contadores
function animateCounters() {
    const counters = document.querySelectorAll('.stat-card h3');
    
    counters.forEach(counter => {
        const text = counter.textContent;
        const match = text.match(/\+?(\d+)/);
        
        if (match) {
            counter.dataset.target = match[1];
        }
    });
}

function animateCounter(counter) {
    const target = parseInt(counter.dataset.target);
    if (!target) return;
    
    counter.classList.add('counted');
    const duration = 2000; // 2 segundos
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            counter.textContent = '+' + target;
            clearInterval(timer);
        } else {
            counter.textContent = '+' + Math.floor(current);
        }
    }, 16);
}

// Parallax effect no carrossel
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.carousel-inner');
    
    if (parallax && scrolled < 600) {
        parallax.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
    }
});

// Animação de hover nos botões
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--x', x + 'px');
        this.style.setProperty('--y', y + 'px');
    });
});

// Lazy loading para iframes de vídeo
document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target.querySelector('iframe');
                if (iframe && iframe.dataset.src) {
                    iframe.src = iframe.dataset.src;
                    videoObserver.unobserve(entry.target);
                }
            }
        });
    }, { rootMargin: '50px' });
    
    videoCards.forEach(card => videoObserver.observe(card));
});

// Feedback visual ao clicar em links sociais
document.querySelectorAll('.social-icons a, .contact-info a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Se for um link # (placeholder), mostrar mensagem
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
                showToast('Em breve! Siga-nos nas redes sociais.');
            }, 100);
        }
    });
});

// Função para mostrar toast notifications
function showToast(message) {
    // Criar toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Adicionar estilos de animação para toast
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Easter egg - Konami Code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    showToast('🎉 Você descobriu o segredo! Aliado mode ativado! 🎉');
    document.body.style.animation = 'rainbow 3s linear';
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 3000);
}

// Prevenção de envio de formulários (placeholder)
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showToast('Funcionalidade em desenvolvimento!');
    });
});

// Log de inicialização
console.log('%c🎓 Aliado - Aqui você não fica juruna! 🎓', 'color: #0d6efd; font-size: 20px; font-weight: bold;');
console.log('%cSite carregado com sucesso!', 'color: #198754; font-size: 14px;');

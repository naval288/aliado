// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', async function() {
    // Sincroniza usuário do Supabase e só redireciona se sessão for válida
    const supabaseClient = createSupabaseClient();
    let isAuthenticated = false;
    let user = null;
    if (supabaseClient) {
        const { data, error } = await supabaseClient.auth.getUser();
        if (!error && data && data.user) {
            isAuthenticated = true;
            await syncUserFromSupabaseSession();
            user = getCurrentUser();
        } else {
            // Limpa localStorage se não autenticado
            localStorage.removeItem('aliadoCurrentUser');
            localStorage.removeItem('aliadoCourse');
        }
    }
    // Só redireciona se autenticado e pago
    if (isAuthenticated && user && user.isPaid && user.course) {
        window.location.href = 'area-do-aluno.html';
        return;
    }
    renderNavbarByAuth();
    setupCoursePurchaseButtons();
    lockVideosForGuests();

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

function createSupabaseClient() {
    const config = window.SUPABASE_CONFIG || {};
    if (!window.supabase || !config.url || !config.anonKey) {
        return null;
    }

    return window.supabase.createClient(config.url, config.anonKey);
}

async function syncUserFromSupabaseSession() {
    const supabaseClient = createSupabaseClient();
    if (!supabaseClient) return;

    const { data, error } = await supabaseClient.auth.getUser();
    if (error || !data || !data.user) {
        return;
    }

    const accessStatus = await fetchAccessStatus(supabaseClient, data.user.id);

    const user = {
        id: data.user.id,
        email: data.user.email,
        fullName: (data.user.user_metadata && data.user.user_metadata.full_name) || data.user.email,
        username: (data.user.user_metadata && data.user.user_metadata.username) || '',
        provider: 'email',
        subscriptionStatus: accessStatus.isPaid ? 'ativa' : 'inativa',
        isPaid: accessStatus.isPaid,
        plan: accessStatus.plan,
        course: accessStatus.course
    };

    localStorage.setItem('aliadoCurrentUser', JSON.stringify(user));
    if (accessStatus.isPaid && accessStatus.course) {
        localStorage.setItem('aliadoCourse', accessStatus.course);
    } else {
        localStorage.removeItem('aliadoCourse');
    }
}

async function fetchAccessStatus(supabaseClient, userId) {
    const fallback = { isPaid: false, plan: 'free', course: null };

    const { data, error } = await supabaseClient
        .from('user_access')
        .select('pago, plano, curso')
        .eq('user_id', userId)
        .maybeSingle();

    if (error || !data) {
        return fallback;
    }

    return {
        isPaid: !!data.pago,
        plan: data.plano || 'free',
        course: data.curso || null
    };
}

function getCurrentUser() {
    const raw = localStorage.getItem('aliadoCurrentUser');
    if (!raw) return null;

    try {
        return JSON.parse(raw);
    } catch {
        return null;
    }
}

function setupCoursePurchaseButtons() {
    const purchaseLinks = document.querySelectorAll('a[href^="pagamento.html?plano="]');
    if (!purchaseLinks.length) return;

    purchaseLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const currentUser = getCurrentUser();
            const url = new URL(this.getAttribute('href'), window.location.origin);
            const selectedCourse = url.searchParams.get('plano');

            if (!currentUser) {
                event.preventDefault();
                window.location.href = 'login.html';
                return;
            }

            if (currentUser.isPaid && currentUser.course === selectedCourse) {
                event.preventDefault();
                alert('Voce ja possui este curso.');
            }
        });
    });
}

function renderNavbarByAuth() {
    // Exibe apenas menus de login/cadastro/assinar/conectado/sair, nunca Aulas ou Simulados no index.html
    const menuAssinar = document.getElementById('menuAssinar');
    const menuEntrar = document.getElementById('menuEntrar');
    const menuCadastrar = document.getElementById('menuCadastrar');
    const menuConectado = document.getElementById('menuConectado');
    const menuSair = document.getElementById('menuSair');
    const textoConectado = document.getElementById('textoConectado');
    const btnSairNavbar = document.getElementById('btnSairNavbar');
    const currentUser = getCurrentUser();

    if (!menuAssinar || !menuEntrar || !menuCadastrar || !menuConectado || !menuSair || !textoConectado) {
        return;
    }

    if (currentUser) {
        const hasPaidAccess = !!currentUser.isPaid;
        menuAssinar.classList.add('d-none');
        menuConectado.classList.remove('d-none');
        menuSair.classList.remove('d-none');
        menuEntrar.classList.add('d-none');
        menuCadastrar.classList.add('d-none');
        const displayName = currentUser.username || currentUser.fullName || currentUser.email;
        textoConectado.textContent = `Conectado: ${displayName} (${hasPaidAccess ? 'Pago' : 'Sem assinatura'})`;
    } else {
        menuAssinar.classList.add('d-none');
        menuConectado.classList.add('d-none');
        menuSair.classList.add('d-none');
        menuEntrar.classList.remove('d-none');
        menuCadastrar.classList.remove('d-none');
        textoConectado.textContent = '';
    }

    if (btnSairNavbar) {
        btnSairNavbar.addEventListener('click', async function () {
            const supabaseClient = createSupabaseClient();
            if (supabaseClient) {
                await supabaseClient.auth.signOut();
            }

            localStorage.removeItem('aliadoCurrentUser');
            localStorage.removeItem('aliadoCourse');
            localStorage.removeItem('aliadoAccessCode');
            window.location.href = 'index.html';
        });
    }
}

function lockVideosForGuests() {
    const videosSection = document.getElementById('videos');
    if (!videosSection) return;

    const currentUserRaw = localStorage.getItem('aliadoCurrentUser');
    if (currentUserRaw) return;

    videosSection.innerHTML = `
        <div class="container">
            <div class="text-center p-5 bg-white rounded-4 shadow-sm">
                <i class="fas fa-lock fa-3x text-primary mb-3"></i>
                <h2 class="fw-bold mb-3">Vídeos exclusivos para alunos logados</h2>
                <p class="text-muted mb-4">Entre na sua conta para assistir às aulas e conteúdos em vídeo.</p>
                <a class="btn btn-warning btn-lg me-2" href="login.html">Entrar</a>
                <a class="btn btn-outline-success btn-lg" href="cadastro.html">Cadastrar</a>
            </div>
        </div>
    `;
}

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

// Banco de dados de cursos e aulas
const coursesData = {
    'soldado-cabo': {
        name: 'Soldado para Cabo',
        modules: [
            {
                id: 'mod1',
                name: 'Português',
                icon: 'fa-book',
                lessons: [
                    {
                        id: 'pt1',
                        title: 'Ortografia e Acentuação',
                        duration: '45 min',
                        videoId: 'dQw4w9WgXcQ', // Substitua pelo ID real do YouTube
                        description: 'Aprenda as regras de ortografia e acentuação da língua portuguesa, essenciais para as provas militares.',
                        materials: [
                            { name: 'Apostila de Ortografia.pdf', url: '#' },
                            { name: 'Exercícios Práticos.pdf', url: '#' }
                        ]
                    },
                    {
                        id: 'pt2',
                        title: 'Classes Gramaticais',
                        duration: '60 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Estudo completo das classes gramaticais: substantivo, adjetivo, verbo, advérbio e mais.',
                        materials: [
                            { name: 'Resumo Classes Gramaticais.pdf', url: '#' }
                        ]
                    },
                    {
                        id: 'pt3',
                        title: 'Sintaxe e Análise Sintática',
                        duration: '55 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Análise sintática: termos essenciais, integrantes e acessórios da oração.',
                        materials: []
                    },
                    {
                        id: 'pt4',
                        title: 'Interpretação de Texto',
                        duration: '50 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Técnicas de interpretação de texto e compreensão de questões de provas.',
                        materials: [
                            { name: 'Textos para Prática.pdf', url: '#' }
                        ]
                    }
                ]
            },
            {
                id: 'mod2',
                name: 'Matemática',
                modules: [
                    {
                        id: 'mod1',
                        name: 'LEGISLAÇÃO',
                        lessons: [
                            { title: 'Cerimonial da Marinha', topics: [] },
                            { title: 'Estatuto dos Militares', topics: [] },
                            { title: 'Regulamento Disciplinar para a Marinha', topics: [] },
                            { title: 'Ordenança Geral para o Serviço da Armada', topics: [] }
                        ]
                    },
                    {
                        id: 'mod2',
                        name: 'MANUAL BÁSICO DO FUZILEIRO NAVAL',
                        lessons: [
                            { title: 'O Corpo de Fuzileiros Navais', topics: [] },
                            { title: 'Tradições Navais', topics: [] },
                            { title: 'Hierarquia, Disciplina e Cortesia', topics: [] },
                            { title: 'Legislação Pertinente aos Militares da Marinha do Brasil', topics: [] },
                            { title: 'Educação Moral e Cívica', topics: [] },
                            { title: 'Liderança', topics: [] },
                            { title: 'A carreira do Fuzileiro Naval', topics: [] },
                            { title: 'Higiene e profilaxia', topics: [] },
                            { title: 'Serviços internos', topics: [] },
                            { title: 'A conduta do Fuzileiro Naval em sociedade', topics: [] },
                            { title: 'Organização', topics: [] }
                        ]
                    },
                    {
                        id: 'mod3',
                        name: 'MANUAL BÁSICO DO COMBATENTE ANFÍBIO',
                        lessons: [
                            { title: 'Organização', topics: [] },
                            { title: 'Características de uma Área de Operações', topics: [] },
                            { title: 'Técnicas Individuais de Combate', topics: [] },
                            { title: 'Operações Anfíbias', topics: [] },
                            { title: 'Operações Terrestres', topics: [] },
                            { title: 'Grupo de Combate e Esquadra de Tiro', topics: [] },
                            { title: 'Operações sob condições de visibilidade reduzida', topics: [] },
                            { title: 'Patrulhas', topics: [] },
                            { title: 'Marchas e estacionamentos', topics: [] },
                            { title: 'Comunicações', topics: [] },
                            { title: 'Combate corpo a corpo', topics: [] }
                        ]
                    },
                    {
                        id: 'mod4',
                        name: 'MANUAL DOS GRUPAMENTOS OPERATIVOS',
                        lessons: [
                            { title: 'Guerra, Conflito, Poder e Funções de Combate', topics: [] },
                            { title: 'Os Fuzileiros Navais', topics: [] }
                        ]
                    }
                ]
                        id: 'hg2',
                        title: 'Geografia do Brasil',
                        duration: '55 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Regiões brasileiras, clima, vegetação e relevo.',
                        materials: [
                            { name: 'Mapas do Brasil.pdf', url: '#' }
                        ]
                    },
                    {
                        id: 'hg3',
                        title: 'História Militar Brasileira',
                        duration: '60 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Principais conflitos e a participação das Forças Armadas na história do Brasil.',
                        materials: []
                    }
                ]
            }
        ]
    },
    'cabo-sargento': {
        name: 'Cabo para Sargento',
        modules: [
            {
                id: 'mod1',
                name: 'Português Avançado',
                icon: 'fa-book',
                lessons: [
                    {
                        id: 'pt1',
                        title: 'Concordância Verbal e Nominal',
                        duration: '50 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Regras avançadas de concordância verbal e nominal para concursos militares.',
                        materials: [
                            { name: 'Apostila Concordância.pdf', url: '#' }
                        ]
                    },
                    {
                        id: 'pt2',
                        title: 'Regência Verbal e Nominal',
                        duration: '55 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Estudo detalhado da regência de verbos e nomes mais cobrados em provas.',
                        materials: []
                    },
                    {
                        id: 'pt3',
                        title: 'Crase',
                        duration: '45 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Todas as regras de uso da crase com casos especiais e exceções.',
                        materials: [
                            { name: 'Exercícios de Crase.pdf', url: '#' }
                        ]
                    },
                    {
                        id: 'pt4',
                        title: 'Redação Militar',
                        duration: '60 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Técnicas de redação para correspondências e documentos militares.',
                        materials: [
                            { name: 'Modelos de Redação.pdf', url: '#' }
                        ]
                    }
                ]
            },
            {
                id: 'mod2',
                name: 'Matemática Avançada',
                icon: 'fa-calculator',
                lessons: [
                    {
                        id: 'mat1',
                        title: 'Funções',
                        duration: '60 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Estudo de funções: 1º grau, 2º grau, exponencial e logarítmica.',
                        materials: [
                            { name: 'Gráficos de Funções.pdf', url: '#' }
                        ]
                    },
                    {
                        id: 'mat2',
                        title: 'Trigonometria',
                        duration: '65 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Razões trigonométricas, ciclo trigonométrico e identidades.',
                        materials: [
                            { name: 'Tabela Trigonométrica.pdf', url: '#' }
                        ]
                    },
                    {
                        id: 'mat3',
                        title: 'Geometria Espacial',
                        duration: '55 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Cálculo de volumes e áreas de sólidos geométricos.',
                        materials: []
                    },
                    {
                        id: 'mat4',
                        title: 'Análise Combinatória',
                        duration: '50 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Princípios de contagem, permutações, arranjos e combinações.',
                        materials: [
                            { name: 'Exercícios Resolvidos.pdf', url: '#' }
                        ]
                    }
                ]
            },
            {
                id: 'mod3',
                name: 'Conhecimentos Militares',
                icon: 'fa-shield-alt',
                lessons: [
                    {
                        id: 'cm1',
                        title: 'Ordenança Geral',
                        duration: '45 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Estudo da Ordenança Geral das Forças Armadas.',
                        materials: [
                            { name: 'Ordenança Geral.pdf', url: '#' }
                        ]
                    },
                    {
                        id: 'cm2',
                        title: 'Regulamento Disciplinar',
                        duration: '50 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Normas disciplinares e hierarquia militar.',
                        materials: []
                    },
                    {
                        id: 'cm3',
                        title: 'Armamento e Munição',
                        duration: '55 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Conhecimentos sobre armamento, munição e tiro.',
                        materials: [
                            { name: 'Manual de Armamento.pdf', url: '#' }
                        ]
                    }
                ]
            },
            {
                id: 'mod4',
                name: 'Informática',
                icon: 'fa-laptop',
                lessons: [
                    {
                        id: 'inf1',
                        title: 'Windows e Linux',
                        duration: '45 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Sistemas operacionais Windows e Linux: recursos e comandos.',
                        materials: []
                    },
                    {
                        id: 'inf2',
                        title: 'Microsoft Office',
                        duration: '50 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Word, Excel e PowerPoint: funcionalidades e atalhos.',
                        materials: [
                            { name: 'Atalhos Office.pdf', url: '#' }
                        ]
                    },
                    {
                        id: 'inf3',
                        title: 'Redes e Internet',
                        duration: '40 min',
                        videoId: 'dQw4w9WgXcQ',
                        description: 'Conceitos de redes, protocolos e segurança da informação.',
                        materials: []
                    }
                ]
            }
        ]
    }
};

// Estado da aplicação
let currentCourse = null; // Será definido pelo acesso do usuário
let currentLesson = null;
let completedLessons = new Set();
let expandedModuleId = null;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    const currentUserRaw = localStorage.getItem('aliadoCurrentUser');
    let currentUser = null;
    if (currentUserRaw) {
        try {
            currentUser = JSON.parse(currentUserRaw);
        } catch {
            currentUser = null;
        }
    }
    const userCourse = localStorage.getItem('aliadoCourse');
    
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    if (!currentUser.isPaid) {
        alert('Seu acesso ainda nao foi liberado. Entre em contato para confirmar o pagamento.');
        window.location.href = 'index.html';
        return;
    }

    if (!userCourse || !coursesData[userCourse]) {
        alert('Seu curso ainda nao foi vinculado. Entre em contato com o suporte.');
        window.location.href = 'index.html';
        return;
    }
    
    // Definir o curso do usuário
    currentCourse = userCourse;
    
    // Atualizar título do curso
    updateCourseTitle();
    
    // Carregar progresso e renderizar
    loadProgress();
    renderModules();
    setupEventListeners();
});

// Atualizar título do curso
function updateCourseTitle() {
    const course = coursesData[currentCourse];
    const titleElement = document.getElementById('courseTitle');
    
    if (titleElement) {
        titleElement.textContent = course.name;
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Botão de logout
    const btnLogout = document.getElementById('btnLogout');
    if (btnLogout) {
        btnLogout.addEventListener('click', function() {
            if (confirm('Tem certeza que deseja sair? Seu progresso será salvo.')) {
                localStorage.removeItem('aliadoCourse');
                localStorage.removeItem('aliadoAccessCode');
                localStorage.removeItem('aliadoCurrentUser');
                window.location.href = 'login.html';
            }
        });
    }

    // Navegação entre aulas
    document.getElementById('prevLesson').addEventListener('click', navigateToPrev);
    document.getElementById('nextLesson').addEventListener('click', navigateToNext);
    document.getElementById('markComplete').addEventListener('click', markAsComplete);

    // Clique em módulo/aula com delegação de evento
    const modulesList = document.getElementById('modulesList');
    if (modulesList) {
        modulesList.addEventListener('click', function (event) {
            const toggleButton = event.target.closest('[data-module-toggle]');
            if (toggleButton) {
                const moduleId = toggleButton.dataset.moduleToggle;
                expandedModuleId = expandedModuleId === moduleId ? null : moduleId;
                renderModules();
                return;
            }

            const lessonItem = event.target.closest('.lesson-item');
            if (lessonItem) {
                const moduleId = lessonItem.dataset.module;
                const lessonId = lessonItem.dataset.lesson;
                loadLesson(moduleId, lessonId);
            }
        });
    }
}

// Renderizar módulos
function renderModules() {
    const modulesList = document.getElementById('modulesList');
    const course = coursesData[currentCourse];

    if (currentLesson && currentLesson.moduleId) {
        expandedModuleId = currentLesson.moduleId;
    }
    
    modulesList.innerHTML = course.modules.map(module => `
        <div class="module-item ${expandedModuleId === module.id ? 'expanded' : ''}" data-module="${module.id}">
            <button class="module-header" data-module-toggle="${module.id}" type="button" aria-expanded="${expandedModuleId === module.id}">
                <div>
                    <h6 class="mb-1"><i class="fas ${module.icon} me-2"></i>${module.name}</h6>
                    <p class="text-muted mb-0"><small>${module.lessons.length} aulas</small></p>
                </div>
                <i class="fas fa-chevron-down module-chevron"></i>
            </button>
            <div class="lessons-list">
                ${module.lessons.map((lesson, index) => `
                    <div class="lesson-item ${completedLessons.has(currentCourse + '-' + lesson.id) ? 'completed' : ''} ${currentLesson && currentLesson.moduleId === module.id && currentLesson.lessonId === lesson.id ? 'active' : ''}" 
                         data-module="${module.id}" 
                         data-lesson="${lesson.id}">
                        <i class="fas ${completedLessons.has(currentCourse + '-' + lesson.id) ? 'fa-check-circle' : 'fa-play-circle'} me-2"></i>
                        ${index + 1}. ${lesson.title}
                        <small class="text-muted d-block ms-4">${lesson.duration}</small>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Carregar aula
function loadLesson(moduleId, lessonId) {
    const course = coursesData[currentCourse];
    const module = course.modules.find(m => m.id === moduleId);
    const lesson = module.lessons.find(l => l.id === lessonId);
    
    currentLesson = { moduleId, lessonId };
    
    // Atualizar UI
    document.querySelectorAll('.lesson-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`[data-module="${moduleId}"][data-lesson="${lessonId}"]`).classList.add('active');
    
    // Carregar vídeo
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('videoContainer').innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/${lesson.videoId}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    
    // Carregar descrição
    document.getElementById('lessonDescription').innerHTML = `
        <p>${lesson.description}</p>
        <p class="text-muted"><i class="fas fa-clock me-2"></i>Duração: ${lesson.duration}</p>
    `;
    
    // Carregar materiais
    if (lesson.materials && lesson.materials.length > 0) {
        document.getElementById('lessonMaterials').innerHTML = lesson.materials.map(material => `
            <a href="${material.url}" class="btn btn-outline-primary btn-sm me-2 mb-2" download>
                <i class="fas fa-download me-2"></i>${material.name}
            </a>
        `).join('');
    } else {
        document.getElementById('lessonMaterials').innerHTML = '<p class="text-muted">Nenhum material disponível para esta aula.</p>';
    }
    
    // Atualizar navegação
    updateNavigation();
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Atualizar navegação
function updateNavigation() {
    const { prev, next } = getAdjacentLessons();
    
    document.getElementById('prevLesson').disabled = !prev;
    document.getElementById('nextLesson').disabled = !next;
    
    const isCompleted = completedLessons.has(currentCourse + '-' + currentLesson.lessonId);
    const markBtn = document.getElementById('markComplete');
    if (isCompleted) {
        markBtn.innerHTML = '<i class="fas fa-check me-2"></i>Aula Concluída';
        markBtn.classList.add('btn-success');
        markBtn.classList.remove('btn-primary');
    } else {
        markBtn.innerHTML = '<i class="fas fa-check me-2"></i>Marcar como Concluída';
        markBtn.classList.remove('btn-success');
        markBtn.classList.add('btn-primary');
    }
}

// Obter aulas adjacentes
function getAdjacentLessons() {
    if (!currentLesson) return { prev: null, next: null };
    
    const course = coursesData[currentCourse];
    const allLessons = [];
    
    course.modules.forEach(module => {
        module.lessons.forEach(lesson => {
            allLessons.push({ moduleId: module.id, lessonId: lesson.id });
        });
    });
    
    const currentIndex = allLessons.findIndex(
        l => l.moduleId === currentLesson.moduleId && l.lessonId === currentLesson.lessonId
    );
    
    return {
        prev: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
        next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null
    };
}

// Navegar para aula anterior
function navigateToPrev() {
    const { prev } = getAdjacentLessons();
    if (prev) {
        loadLesson(prev.moduleId, prev.lessonId);
    }
}

// Navegar para próxima aula
function navigateToNext() {
    const { next } = getAdjacentLessons();
    if (next) {
        loadLesson(next.moduleId, next.lessonId);
    }
}

// Marcar como concluída
function markAsComplete() {
    if (!currentLesson) return;
    
    const lessonKey = currentCourse + '-' + currentLesson.lessonId;
    
    if (completedLessons.has(lessonKey)) {
        completedLessons.delete(lessonKey);
    } else {
        completedLessons.add(lessonKey);
    }
    
    saveProgress();
    renderModules();
    updateProgress();
    updateNavigation();
}

// Atualizar progresso
function updateProgress() {
    const course = coursesData[currentCourse];
    let totalLessons = 0;
    
    course.modules.forEach(module => {
        totalLessons += module.lessons.length;
    });
    
    const completed = Array.from(completedLessons).filter(key => key.startsWith(currentCourse + '-')).length;
    const percentage = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
    
    document.getElementById('courseProgress').style.width = percentage + '%';
    document.getElementById('progressText').textContent = percentage + '% concluído';
    document.getElementById('lessonsCompleted').textContent = completed;
    document.getElementById('totalLessons').textContent = totalLessons;
}

// Limpar visualização da aula
function clearLessonView() {
    document.getElementById('lessonTitle').textContent = 'Selecione uma aula';
    document.getElementById('videoContainer').innerHTML = `
        <div class="video-placeholder">
            <div>
                <i class="fas fa-play-circle fa-5x mb-3"></i>
                <p class="mb-0">Selecione uma aula para começar</p>
            </div>
        </div>
    `;
    document.getElementById('lessonDescription').innerHTML = '<p class="text-muted">Selecione uma aula ao lado para ver o conteúdo completo.</p>';
    document.getElementById('lessonMaterials').innerHTML = '<p class="text-muted">Nenhum material disponível para esta aula.</p>';
    document.getElementById('prevLesson').disabled = true;
    document.getElementById('nextLesson').disabled = true;
}

// Salvar progresso no localStorage
function saveProgress() {
    localStorage.setItem('aliadoProgress', JSON.stringify(Array.from(completedLessons)));
}

// Carregar progresso do localStorage
function loadProgress() {
    const saved = localStorage.getItem('aliadoProgress');
    if (saved) {
        completedLessons = new Set(JSON.parse(saved));
    }
    updateProgress();
}

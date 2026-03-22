// Banco de dados de cursos e aulas
const coursesData = {
    'materias': {
        // Banco de dados de cursos e aulas
        const coursesData = {
            'materias': {
                name: 'Matérias do Curso',
                modules: [
                    {
                        id: 'mod1',
                        name: 'LEGISLAÇÃO',
                        lessons: [
                            { title: 'Cerimonial da Marinha', topics: [
                                'Propósito e conceituação',
                                'Permissão para largar',
                                'Embarque e desembarque',
                                'Continência (quando faz / quando não faz / dispensa)',
                                'Honras de portaló',
                                'Cerimonial à bandeira',
                                'Procedimentos em veículos',
                                'Iluminação, dobra e guarda da bandeira',
                                'Entrada/saída de bordo',
                                'Saudações (diária e passagem)',
                                'Hasteamento e arriamento',
                                'Proibições',
                                'Bandeira da Cruz Vermelha',
                                'Autoridades a bordo',
                                'Datas festivas / dias de gala'
                            ]},
                            { title: 'Estatuto dos Militares', topics: [
                                'Disposições preliminares',
                                'Hierarquia e disciplina',
                                'Obrigações militares',
                                'Deveres militares',
                                'Violações',
                                'Direitos',
                                'Prerrogativas'
                            ]},
                            { title: 'Regulamento Disciplinar da Marinha', topics: [
                                'Generalidades',
                                'Contravenções disciplinares',
                                'Penas disciplinares'
                            ]},
                            { title: 'Ordenança Geral da Armada', topics: [
                                'Disposições gerais',
                                'Deveres das praças',
                                'Guardas e sentinelas'
                            ]}
                        ]
                    },
                    {
                        id: 'mod2',
                        name: 'MANUAL BÁSICO DO FUZILEIRO NAVAL',
                        lessons: [
                            { title: 'Corpo de Fuzileiros Navais', topics: [
                                'Histórico (antecedentes, fases)'
                            ]},
                            { title: 'Tradições Navais', topics: [
                                'Gente de bordo',
                                'Pessoal de serviço',
                                'Oficial de serviço',
                                'Contramestre / Polícia / Ronda',
                                'Sentinela',
                                'Rotina de bordo',
                                'Sino e apito',
                                'Costumes',
                                'Saudações militares',
                                'Uniformes',
                                'Instalações (alojamento, rancho, paiol, etc.)',
                                'Linguagem do mar',
                                'Posições a bordo'
                            ]},
                            { title: 'Hierarquia, Disciplina e Cortesia', topics: [
                                'Hierarquia e disciplina',
                                'Cortesia militar',
                                'Continência',
                                'Tratamento entre militares',
                                'Procedimentos do FN',
                                'Postos e precedência'
                            ]},
                            { title: 'Legislação Militar (Resumo completo)', topics: [
                                'Constituição Federal',
                                'Estatuto dos Militares',
                                'RDM',
                                'Código Penal Militar',
                                'Código de Processo Penal Militar',
                                'Remuneração',
                                'Promoção de praças',
                                'Cerimonial',
                                'Uniformes',
                                'Continências',
                                'OGSA',
                                'Organização das Forças Armadas',
                                'Conselhos (disciplina/justificação)',
                                'Serviço militar'
                            ]},
                            { title: 'Educação Moral e Cívica', topics: [
                                'Família',
                                'Pátria',
                                'Responsabilidade social',
                                'Homem/mulher do mar',
                                'Caserna',
                                'Espírito de corpo',
                                'Símbolos nacionais'
                            ]},
                            { title: 'Liderança', topics: [
                                'Conceitos básicos',
                                'Ética',
                                'Valores',
                                'Princípios de liderança',
                                'Influência / confiança / comprometimento',
                                'Senso de pertencimento / dever / propósito',
                                'O que o líder deve ser, saber e fazer',
                                'Diferença líder x chefe'
                            ]},
                            { title: 'Carreira do Fuzileiro Naval', topics: [
                                'Estrutura da carreira',
                                'Corpos e quadros',
                                'Graus hierárquicos',
                                'Cursos e estágios',
                                'Promoções',
                                'Tempo de serviço',
                                'Ascensão ao oficialato',
                                'Sistema de gestão',
                                'Pontuação'
                            ]},
                            { title: 'Higiene e Profilaxia', topics: [
                                'Higiene em campanha'
                            ]},
                            { title: 'Serviços Internos', topics: [
                                'Serviço de estado',
                                'Guarda do quartel',
                                'Policiamento interno',
                                'Atribuições',
                                'Comandante da guarda',
                                'Sentinelas',
                                'Plantão',
                                'Regras de segurança'
                            ]},
                            { title: 'Conduta do Fuzileiro Naval', topics: [
                                'Comportamento em público',
                                'Uso de redes sociais',
                                'Exposição na internet',
                                'Fake news'
                            ]},
                            { title: 'Organização da Marinha', topics: [
                                'Missão e visão',
                                'Estrutura da Marinha',
                                'CFN (organização)',
                                'Unidades operativas',
                                'Batalhões',
                                'Comandos',
                                'OM de apoio'
                            ]}
                        ]
                    },
                    {
                        id: 'mod3',
                        name: 'MANUAL DO COMBATENTE ANFÍBIO',
                        lessons: [
                            { title: 'Organização', topics: [
                                'Batalhões (Infantaria, Artilharia, Blindados, etc.)',
                                'Companhia de Polícia',
                                'Logística'
                            ]},
                            { title: 'Área de Operações', topics: [
                                'Terreno',
                                'Aspectos táticos',
                                'Formas do terreno',
                                'Leis do modelado'
                            ]},
                            { title: 'Técnicas Individuais de Combate', topics: [
                                'Uso do terreno',
                                'Observação (dia/noite)',
                                'Posição de tiro',
                                'Camuflagem'
                            ]},
                            { title: 'Operações Anfíbias', topics: [
                                'Tipos (assalto, incursão, retirada)',
                                'Fases (planejamento → embarque → travessia → assalto)',
                                'Transbordo',
                                'Desembarque',
                                'Conduta em terra'
                            ]},
                            { title: 'Operações Terrestres', topics: [
                                'Ofensiva',
                                'Defensiva',
                                'Manobras táticas'
                            ]},
                            { title: 'Grupo de Combate e Esquadra de Tiro', topics: [
                                'Organização',
                                'Armamento',
                                'Formações',
                                'Sinais',
                                'Combate ofensivo e defensivo'
                            ]}
                        ]
                    }
                ]
            }
        };
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

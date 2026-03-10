// Banco de questões por matéria
const questionsBank = {
    portugues: [
        {
            question: "Assinale a palavra escrita corretamente.",
            options: [
                "Excessão",
                "Exceção",
                "Exsessão",
                "Exceçãoo"
            ],
            correct: 1
        },
        {
            question: "Qual é o plural de cidadão?",
            options: [
                "Cidadãos",
                "Cidadões",
                "Cidadães",
                "Cidadaos"
            ],
            correct: 0
        },
        {
            question: "Qual frase está correta?",
            options: [
                "Fazem dois anos que ele saiu.",
                "Faz dois anos que ele saiu.",
                "Fazem dois ano que ele saiu.",
                "Faz dois ano que ele saiu."
            ],
            correct: 1
        },
        {
            question: "A palavra 'rápido' é classificada como:",
            options: [
                "Substantivo",
                "Adjetivo",
                "Verbo",
                "Advérbio"
            ],
            correct: 1
        },
        {
            question: "Assinale o sinônimo de persistência.",
            options: [
                "Desânimo",
                "Determinação",
                "Fraqueza",
                "Medo"
            ],
            correct: 1
        },
        {
            question: "Na frase \"O fuzileiro cumpriu a missão.\", o sujeito é:",
            options: [
                "missão",
                "cumpriu",
                "fuzileiro",
                "o"
            ],
            correct: 2
        },
        {
            question: "Qual palavra é um verbo?",
            options: [
                "Caminhar",
                "Caminho",
                "Caminhada",
                "Caminhoneiro"
            ],
            correct: 0
        },
        {
            question: "Qual é o antônimo de forte?",
            options: [
                "Rápido",
                "Fraco",
                "Grande",
                "Alto"
            ],
            correct: 1
        },
        {
            question: "Assinale a palavra com acentuação correta.",
            options: [
                "Heroi",
                "Herói",
                "Heroí",
                "Heroii"
            ],
            correct: 1
        },
        {
            question: "Qual das palavras abaixo é um substantivo?",
            options: [
                "Marinha",
                "Navegar",
                "Azul",
                "Forte"
            ],
            correct: 0
        }
    ],
    
    matematica: [
        {
            question: "Quanto é: 3 + 7 × 2",
            options: [
                "20",
                "17",
                "14",
                "10"
            ],
            correct: 1
        },
        {
            question: "Qual é o MDC de 20 e 30?",
            options: [
                "5",
                "10",
                "15",
                "20"
            ],
            correct: 1
        },
        {
            question: "Quanto é: 1/2 + 1/4",
            options: [
                "3/4",
                "2/6",
                "1/6",
                "1"
            ],
            correct: 0
        },
        {
            question: "Qual é o valor de: 9²",
            options: [
                "18",
                "72",
                "81",
                "90"
            ],
            correct: 2
        },
        {
            question: "Um fuzileiro corre 5 km por dia. Em 6 dias ele corre:",
            options: [
                "25 km",
                "30 km",
                "35 km",
                "40 km"
            ],
            correct: 1
        },
        {
            question: "Quanto é: 120 ÷ 6",
            options: [
                "20",
                "18",
                "22",
                "24"
            ],
            correct: 0
        },
        {
            question: "Qual é o MMC de 6 e 8?",
            options: [
                "12",
                "24",
                "18",
                "36"
            ],
            correct: 1
        },
        {
            question: "Quanto é: 7 × 8",
            options: [
                "54",
                "56",
                "64",
                "48"
            ],
            correct: 1
        },
        {
            question: "Um número é múltiplo de 5 quando:",
            options: [
                "termina em 2 ou 4",
                "termina em 0 ou 5",
                "termina em 3",
                "termina em 1"
            ],
            correct: 1
        },
        {
            question: "Quanto é: 50% de 200",
            options: [
                "50",
                "100",
                "150",
                "75"
            ],
            correct: 1
        }
    ],
    
    conhecimentos: [
        {
            question: "Quem descobriu o Brasil?",
            options: [
                "Dom Pedro I",
                "Pedro Álvares Cabral",
                "Getúlio Vargas",
                "Tiradentes"
            ],
            correct: 1
        },
        {
            question: "Em que ano o Brasil foi descoberto?",
            options: [
                "1492",
                "1500",
                "1530",
                "1822"
            ],
            correct: 1
        },
        {
            question: "A capital do Brasil é:",
            options: [
                "Rio de Janeiro",
                "Brasília",
                "São Paulo",
                "Salvador"
            ],
            correct: 1
        },
        {
            question: "O maior oceano do mundo é:",
            options: [
                "Atlântico",
                "Índico",
                "Pacífico",
                "Ártico"
            ],
            correct: 2
        },
        {
            question: "A independência do Brasil ocorreu em:",
            options: [
                "1500",
                "1808",
                "1822",
                "1889"
            ],
            correct: 2
        },
        {
            question: "Qual é a patente hierarquicamente superior?",
            options: [
                "Cabo",
                "Sargento",
                "Subtenente",
                "Tenente"
            ],
            correct: 3
        },
        {
            question: "A continência é prestada:",
            options: [
                "Apenas por superiores",
                "Apenas por inferiores",
                "Por inferiores e retribuída por superiores",
                "Opcional em todas as situações"
            ],
            correct: 2
        },
        {
            question: "Qual é um dos deveres do militar?",
            options: [
                "Criticar ordens publicamente",
                "Dedicar-se ao serviço",
                "Participar de atividades políticas",
                "Negar cumprimento de ordens injustas"
            ],
            correct: 1
        },
        {
            question: "Disciplina militar pode ser definida como:",
            options: [
                "Rigor excessivo nas punições",
                "Obediência pronta às ordens dos superiores",
                "Sistema de privilégios hierárquicos",
                "Liberdade de ação em serviço"
            ],
            correct: 1
        },
        {
            question: "A Bandeira Nacional deve ser hasteada:",
            options: [
                "Apenas em feriados",
                "Diariamente, do nascer ao pôr do sol",
                "Apenas em solenidades",
                "Conforme decisão do comandante"
            ],
            correct: 1
        }
    ]
};

// Variáveis globais
let currentSubject = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime;
let timerInterval;
let timeLimit = 30 * 60; // 30 minutos em segundos
let timeRemaining = timeLimit;

// Iniciar simulado
function startSimulado(subject) {
    currentSubject = subject;
    currentQuestions = [...questionsBank[subject]];
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    
    // Esconder tela de seleção e mostrar tela de simulado
    document.getElementById('selectionScreen').style.display = 'none';
    document.getElementById('simuladoScreen').style.display = 'block';
    document.getElementById('timer').style.display = 'block';
    
    // Configurar título
    const titles = {
        portugues: 'Simulado de Português',
        matematica: 'Simulado de Matemática',
        conhecimentos: 'Simulado de História e Geografia'
    };
    document.getElementById('simuladoTitle').textContent = titles[subject];
    document.getElementById('totalQuestions').textContent = currentQuestions.length;
    
    // Iniciar timer
    startTime = Date.now();
    timeRemaining = timeLimit;
    startTimer();
    
    // Mostrar primeira questão
    showQuestion();
}

// Mostrar questão atual
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const container = document.getElementById('questionContainer');
    
    let html = `
        <div class="question-card">
            <h5 class="mb-4"><i class="fas fa-question-circle text-primary me-2"></i>Questão ${currentQuestionIndex + 1}</h5>
            <p class="lead mb-4">${question.question}</p>
            <div class="options">
    `;
    
    question.options.forEach((option, index) => {
        const isSelected = userAnswers[currentQuestionIndex] === index;
        html += `
            <button class="option-btn ${isSelected ? 'selected' : ''}" onclick="selectAnswer(${index})">
                <span class="me-2 fw-bold">${String.fromCharCode(65 + index)})</span> ${option}
            </button>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    
    // Atualizar progresso
    updateProgress();
    
    // Atualizar botões
    updateButtons();
}

// Selecionar resposta
function selectAnswer(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    showQuestion();
}

// Próxima questão
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

// Questão anterior
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// Atualizar barra de progresso
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
}

// Atualizar botões
function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        finishBtn.style.display = 'none';
    }
}

// Timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        
        document.getElementById('timeDisplay').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finishSimulado();
        }
        
        // Alerta quando faltam 5 minutos
        if (timeRemaining === 300) {
            alert('⏰ Atenção! Restam apenas 5 minutos!');
        }
    }, 1000);
}

// Finalizar simulado
function finishSimulado() {
    clearInterval(timerInterval);
    
    // Calcular resultado
    let correctCount = 0;
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        }
    });
    
    const totalQuestions = currentQuestions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    
    // Tempo usado
    const timeUsed = timeLimit - timeRemaining;
    const minutesUsed = Math.floor(timeUsed / 60);
    const secondsUsed = timeUsed % 60;
    
    // Mensagem motivacional
    let message = '';
    if (percentage >= 90) {
        message = '🎉 Excelente! Você está muito bem preparado!';
    } else if (percentage >= 70) {
        message = '👏 Muito bom! Continue estudando e você chegará lá!';
    } else if (percentage >= 50) {
        message = '💪 Bom trabalho! Revise os conteúdos e tente novamente.';
    } else {
        message = '📚 Continue estudando! A prática leva à perfeição!';
    }
    
    // Mostrar resultado
    document.getElementById('simuladoScreen').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    document.getElementById('timer').style.display = 'none';
    
    document.getElementById('scorePercent').textContent = percentage + '%';
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('totalCount').textContent = totalQuestions;
    document.getElementById('correctDisplay').textContent = correctCount;
    document.getElementById('wrongDisplay').textContent = totalQuestions - correctCount;
    document.getElementById('timeUsed').textContent = 
        `${String(minutesUsed).padStart(2, '0')}:${String(secondsUsed).padStart(2, '0')}`;
    document.getElementById('motivationalMessage').textContent = message;
}

// Revisar respostas
function reviewAnswers() {
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('simuladoScreen').style.display = 'block';
    
    currentQuestionIndex = 0;
    showReview();
}

// Mostrar revisão
function showReview() {
    const question = currentQuestions[currentQuestionIndex];
    const container = document.getElementById('questionContainer');
    
    let html = `
        <div class="question-card">
            <h5 class="mb-4">
                <i class="fas fa-question-circle me-2"></i>Questão ${currentQuestionIndex + 1}
                ${userAnswers[currentQuestionIndex] === question.correct ? 
                    '<span class="badge bg-success ms-2">Acertou</span>' : 
                    '<span class="badge bg-danger ms-2">Errou</span>'}
            </h5>
            <p class="lead mb-4">${question.question}</p>
            <div class="options">
    `;
    
    question.options.forEach((option, index) => {
        let btnClass = '';
        if (index === question.correct) {
            btnClass = 'correct';
        } else if (index === userAnswers[currentQuestionIndex] && index !== question.correct) {
            btnClass = 'incorrect';
        }
        
        html += `
            <button class="option-btn ${btnClass}" disabled>
                <span class="me-2 fw-bold">${String.fromCharCode(65 + index)})</span> ${option}
                ${index === question.correct ? '<i class="fas fa-check text-success ms-2"></i>' : ''}
                ${index === userAnswers[currentQuestionIndex] && index !== question.correct ? '<i class="fas fa-times text-danger ms-2"></i>' : ''}
            </button>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    updateProgress();
    updateReviewButtons();
}

// Atualizar botões da revisão
function updateReviewButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    prevBtn.onclick = () => {
        currentQuestionIndex--;
        showReview();
    };
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'block';
        finishBtn.innerHTML = '<i class="fas fa-home me-2"></i>Voltar ao Menu';
        finishBtn.onclick = () => location.reload();
    } else {
        nextBtn.style.display = 'block';
        nextBtn.onclick = () => {
            currentQuestionIndex++;
            showReview();
        };
        finishBtn.style.display = 'none';
    }
}

// Log
console.log('%c🎓 Simulados Aliado - Prepare-se para o sucesso! 🎓', 'color: #0d6efd; font-size: 18px; font-weight: bold;');

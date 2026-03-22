(function () {
    const form = document.getElementById('registerForm');
    const feedback = document.getElementById('feedback');
    const btnRegister = document.getElementById('btnRegister');

    const COOLDOWN_KEY = 'aliadoSignupCooldownUntil';
    let isSubmitting = false;
    let cooldownTimer = null;

    function showFeedback(message, type) {
        feedback.classList.remove('d-none', 'alert-danger', 'alert-success', 'alert-warning');
        feedback.classList.add(`alert-${type}`);
        feedback.textContent = message;
    }

    function normalizeEmail(email) {
        return email.trim().toLowerCase();
    }

    function normalizeUsername(username) {
        return username.trim().toLowerCase();
    }

    function normalizePhone(phone) {
        return phone.replace(/\D/g, '');
    }




    // Aqui futuramente você pode chamar uma API/backend para salvar no SQL


    // Função para salvar usuário localmente (ajuste conforme backend SQL futuramente)
    function saveCurrentUser(user) {
        if (!user) return;
        localStorage.setItem('aliadoCurrentUser', JSON.stringify(user));
        localStorage.removeItem('aliadoCourse');
    }

    function setButtonState(disabled, text) {
        if (!btnRegister) return;
        btnRegister.disabled = disabled;
        btnRegister.innerHTML = `<i class="fas fa-check-circle me-2"></i>${text}`;
    }

    function startCooldown(seconds) {
        const until = Date.now() + seconds * 1000;
        localStorage.setItem(COOLDOWN_KEY, String(until));
        applyCooldownFromStorage();
    }

    function applyCooldownFromStorage() {
        const raw = localStorage.getItem(COOLDOWN_KEY);
        const until = raw ? Number(raw) : 0;

        if (!until || Number.isNaN(until) || until <= Date.now()) {
            localStorage.removeItem(COOLDOWN_KEY);
            if (!isSubmitting) {
                setButtonState(false, 'Criar conta');
            }
            if (cooldownTimer) {
                clearInterval(cooldownTimer);
                cooldownTimer = null;
            }
            return;
        }

        if (cooldownTimer) {
            clearInterval(cooldownTimer);
        }

        cooldownTimer = setInterval(() => {
            const remaining = Math.ceil((until - Date.now()) / 1000);
            if (remaining <= 0) {
                clearInterval(cooldownTimer);
                cooldownTimer = null;
                localStorage.removeItem(COOLDOWN_KEY);
                if (!isSubmitting) {
                    setButtonState(false, 'Criar conta');
                }
                return;
            }

            setButtonState(true, `Aguarde ${remaining}s`);
        }, 250);
    }

    applyCooldownFromStorage();

    async function waitForSupabase() {
        // Aguarda até 2 segundos pelo carregamento do SDK
        for (let i = 0; i < 40; i++) {
            if (window.supabase && window.SUPABASE_CONFIG) return true;
            await new Promise(r => setTimeout(r, 50));
        }
        return false;
    }

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const cooldownUntil = Number(localStorage.getItem(COOLDOWN_KEY) || 0);
        if (cooldownUntil > Date.now()) {
            const seconds = Math.ceil((cooldownUntil - Date.now()) / 1000);
            showFeedback(`Aguarde ${seconds}s antes de tentar novo cadastro.`, 'warning');
            return;
        }

        if (isSubmitting) {
            return;
        }

        isSubmitting = true;
        setButtonState(true, 'Criando...');

        const username = normalizeUsername(document.getElementById('username').value);
        const fullName = document.getElementById('fullName').value.trim();
        const phone = normalizePhone(document.getElementById('phone').value);
        const email = normalizeEmail(document.getElementById('email').value);
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const acceptTerms = document.getElementById('acceptTerms').checked;

        if (!username || !fullName || !phone || !email || !password || !confirmPassword) {
            showFeedback('Preencha todos os campos para criar sua conta.', 'danger');
            isSubmitting = false;
            setButtonState(false, 'Criar conta');
            return;
        }

        if (username.length < 3) {
            showFeedback('O usuário deve ter no mínimo 3 caracteres.', 'danger');
            isSubmitting = false;
            setButtonState(false, 'Criar conta');
            return;
        }

        if (phone.length < 10) {
            showFeedback('Digite um telefone válido com DDD.', 'danger');
            isSubmitting = false;
            setButtonState(false, 'Criar conta');
            return;
        }

        if (password.length < 8) {
            showFeedback('A senha deve ter no mínimo 8 caracteres.', 'danger');
            isSubmitting = false;
            setButtonState(false, 'Criar conta');
            return;
        }

        if (password !== confirmPassword) {
            showFeedback('A confirmação de senha não confere.', 'danger');
            isSubmitting = false;
            setButtonState(false, 'Criar conta');
            return;
        }

        if (!acceptTerms) {
            showFeedback('Você precisa aceitar os termos para continuar.', 'warning');
            isSubmitting = false;
            setButtonState(false, 'Criar conta');
            return;
        }

        // Cadastro via Supabase
        const ready = await waitForSupabase();
        if (!ready) {
            showFeedback('Supabase não carregado. Tente recarregar a página.', 'danger');
            isSubmitting = false;
            setButtonState(false, 'Criar conta');
            return;
        }
        const supabaseClient = window.supabase.createClient(window.SUPABASE_CONFIG.url, window.SUPABASE_CONFIG.anonKey);
        try {
            const { data, error } = await supabaseClient.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                        username,
                        phone
                    }
                }
            });
            if (error) {
                showFeedback(error.message || 'Erro ao criar conta.', 'danger');
                isSubmitting = false;
                setButtonState(false, 'Criar conta');
                return;
            }
            // Usuário criado, salva no localStorage
            const user = {
                id: data.user.id,
                email: data.user.email,
                fullName,
                username,
                phone,
                provider: 'email'
            };
            saveCurrentUser(user);
            showFeedback('Conta criada com sucesso! Verifique seu e-mail para ativar.', 'success');
            setButtonState(true, 'Redirecionando...');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } catch (e) {
            showFeedback('Erro ao conectar ao Supabase.', 'danger');
            isSubmitting = false;
            setButtonState(false, 'Criar conta');
        }
    });

})();

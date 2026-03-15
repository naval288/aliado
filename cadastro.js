(function () {
    const form = document.getElementById('registerForm');
    const feedback = document.getElementById('feedback');
    const btnRegister = document.getElementById('btnRegister');
    const supabaseClient = createSupabaseClient();
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

    function createSupabaseClient() {
        const config = window.SUPABASE_CONFIG || {};
        if (!window.supabase || !config.url || !config.anonKey) {
            return null;
        }

        return window.supabase.createClient(config.url, config.anonKey);
    }

    function saveCurrentUser(user) {
        if (!user) return;

        const payload = {
            id: user.id,
            email: user.email,
            fullName: (user.user_metadata && user.user_metadata.full_name) || user.email,
            username: (user.user_metadata && user.user_metadata.username) || '',
            phone: (user.user_metadata && user.user_metadata.phone) || '',
            provider: 'email',
            subscriptionStatus: 'inativa',
            isPaid: false,
            plan: 'free'
        };

        localStorage.setItem('aliadoCurrentUser', JSON.stringify(payload));
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

        if (!supabaseClient) {
            showFeedback('Configure o Supabase em supabase-config.js antes de cadastrar.', 'danger');
            isSubmitting = false;
            setButtonState(false, 'Criar conta');
            return;
        }

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
            if (/rate limit/i.test(error.message || '')) {
                showFeedback('Muitas tentativas em pouco tempo. Aguarde alguns minutos e tente novamente.', 'warning');
                isSubmitting = false;
                startCooldown(60);
                return;
            }

            showFeedback(error.message || 'Erro ao cadastrar. Tente novamente.', 'danger');
            isSubmitting = false;
            setButtonState(false, 'Criar conta');
            return;
        }

        if (data && data.user) {
            saveCurrentUser(data.user);
        }

        if (data && !data.session) {
            showFeedback('Cadastro criado. Verifique seu e-mail para confirmar a conta e depois entre.', 'success');
            isSubmitting = false;
            setButtonState(false, 'Criar conta');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1200);
            return;
        }

        showFeedback('Cadastro realizado com sucesso! Redirecionando para a página inicial...', 'success');
        isSubmitting = false;
        setButtonState(false, 'Criar conta');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1200);
    });

})();

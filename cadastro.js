(function () {
    const form = document.getElementById('registerForm');
    const btnGoogle = document.getElementById('btnGoogle');
    const feedback = document.getElementById('feedback');

    function showFeedback(message, type) {
        feedback.classList.remove('d-none', 'alert-danger', 'alert-success', 'alert-warning');
        feedback.classList.add(`alert-${type}`);
        feedback.textContent = message;
    }

    function normalizeEmail(email) {
        return email.trim().toLowerCase();
    }

    function getUsers() {
        const raw = localStorage.getItem('aliadoUsers');
        if (!raw) return [];

        try {
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    }

    function saveUsers(users) {
        localStorage.setItem('aliadoUsers', JSON.stringify(users));
    }

    function userExists(email, users) {
        return users.some(user => user.email === email);
    }

    function createLocalUser({ fullName, email, provider }) {
        return {
            id: crypto.randomUUID(),
            fullName,
            email,
            provider,
            subscriptionStatus: 'inativa',
            createdAt: new Date().toISOString()
        };
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const email = normalizeEmail(document.getElementById('email').value);
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const acceptTerms = document.getElementById('acceptTerms').checked;

        if (!fullName || !email || !password || !confirmPassword) {
            showFeedback('Preencha todos os campos para criar sua conta.', 'danger');
            return;
        }

        if (password.length < 8) {
            showFeedback('A senha deve ter no mínimo 8 caracteres.', 'danger');
            return;
        }

        if (password !== confirmPassword) {
            showFeedback('A confirmação de senha não confere.', 'danger');
            return;
        }

        if (!acceptTerms) {
            showFeedback('Você precisa aceitar os termos para continuar.', 'warning');
            return;
        }

        const users = getUsers();
        if (userExists(email, users)) {
            showFeedback('Já existe um cadastro com este e-mail.', 'danger');
            return;
        }

        const user = createLocalUser({ fullName, email, provider: 'email' });
        users.push(user);
        saveUsers(users);

        // Somente para fase inicial: guarda sessão local e redireciona.
        localStorage.setItem('aliadoCurrentUser', JSON.stringify(user));

        showFeedback('Cadastro realizado com sucesso! Redirecionando para o acesso...', 'success');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1200);
    });

    btnGoogle.addEventListener('click', function () {
        const users = getUsers();
        const googleEmail = 'usuario.google@exemplo.com';

        if (userExists(googleEmail, users)) {
            const existingUser = users.find(user => user.email === googleEmail);
            localStorage.setItem('aliadoCurrentUser', JSON.stringify(existingUser));
            showFeedback('Login com Google simulado. Conecte ao Supabase OAuth na próxima etapa.', 'success');
        } else {
            const user = createLocalUser({
                fullName: 'Usuário Google',
                email: googleEmail,
                provider: 'google'
            });
            users.push(user);
            saveUsers(users);
            localStorage.setItem('aliadoCurrentUser', JSON.stringify(user));
            showFeedback('Conta Google simulada criada. Próximo passo: integrar OAuth real.', 'success');
        }

        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1200);
    });
})();

# Setup Supabase (Teste Rapido)

## 1) Criar projeto
1. Acesse https://supabase.com
2. Crie um projeto novo.

## 2) Copiar credenciais
No painel do projeto:
1. Settings > API
2. Copie:
- Project URL
- anon public key

## 3) Preencher configuracao no projeto
Edite o arquivo supabase-config.js:

window.SUPABASE_CONFIG = {
    url: "SUA_PROJECT_URL",
    anonKey: "SUA_ANON_PUBLIC_KEY"
};

## 4) Configurar Auth no Supabase
1. Authentication > Providers
2. Email: habilitado
3. Google: habilite apenas se for usar login Google

Para teste rapido sem confirmacao por email:
1. Authentication > Providers > Email
2. Desative confirmacao obrigatoria de email

## 5) Configurar URL do site
1. Authentication > URL Configuration
2. Site URL: http://127.0.0.1:5500
3. Redirect URLs: adicione http://127.0.0.1:5500/index.html

## 6) Testar
1. Abra cadastro.html
2. Crie conta
3. Entre em login.html
4. Volte para index.html e confirme menu liberado apos login

## Observacoes
- O login/cadastro agora usa Supabase Auth (nuvem).
- O localStorage ainda guarda apenas sessao simplificada para controle visual dos menus.
- Usuarios ficam salvos no Auth do Supabase.

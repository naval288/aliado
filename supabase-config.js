// Configuração do Supabase para o Aliado
// Substitua pelos valores do seu projeto Supabase
window.SUPABASE_CONFIG = {
    url: 'https://SEU-PROJETO.supabase.co', // <-- coloque aqui a URL do seu projeto
    anonKey: 'SUA-ANON-KEY' // <-- coloque aqui a anon key do seu projeto
};

// Carrega o SDK do Supabase se ainda não estiver carregado
if (!window.supabase) {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/dist/umd/supabase.min.js';
    script.onload = function() {
        console.log('Supabase SDK carregado!');
    };
    document.head.appendChild(script);
}

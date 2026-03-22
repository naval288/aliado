// Configuração do Supabase para o Aliado
// Substitua pelos valores do seu projeto Supabase

// ATENÇÃO: Substitua a URL abaixo pela Project URL do seu painel Supabase (ex: https://xxxx.supabase.co)
window.SUPABASE_CONFIG = {
    url: 'https://icwdkqhmquujnukrfkhu.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imljd2RrcWhtcXV1am51a3Jma2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1ODg4MDAsImV4cCI6MjA4OTE2NDgwMH0.dFpNPj3V6ciUNyJsfl9VX2W3SpLbT663eyANIFUz4LA'
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

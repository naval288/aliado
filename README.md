# Guia de Instalação e Uso - Site Aliado

![Aliado Logo](https://img.shields.io/badge/Aliado-Você%20não%20fica%20juruna!-blue?style=for-the-badge)

## 📋 Sobre o Projeto

O **Aliado** é uma plataforma educacional moderna e responsiva, inspirada em sites de cursos online. Com design atraente e funcionalidades interativas, o site oferece:

- ✅ Carrossel de imagens interativo
- ✅ Seção de estatísticas animadas
- ✅ Catálogo de cursos
- ✅ Galeria de vídeos
- ✅ Seção "Sobre Nós"
- ✅ Formulário de contato
- ✅ Integração com redes sociais
- ✅ Design responsivo (mobile-first)
- ✅ Animações suaves e modernas
- ✅ Easter egg escondido (código Konami!)

## 🚀 Como Usar

### 1. Estrutura de Arquivos

```
aliado/
├── index.html          # Página principal
├── style.css           # Estilos e animações
├── script.js           # Funcionalidades interativas
├── README.md           # Este arquivo
└── img/                # Pasta de imagens
    ├── carousel/       # Imagens do carrossel (3 imagens)
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   └── 3.jpg
    ├── sobre.jpg       # Imagem da seção "Sobre"
    └── README.md       # Instruções sobre imagens
```

### 2. Abrir o Site

Você tem algumas opções:

#### Opção 1: Abrir Diretamente no Navegador
1. Navegue até a pasta `aliado`
2. Clique duas vezes no arquivo `index.html`
3. O site abrirá no seu navegador padrão

#### Opção 2: Usar um Servidor Local (Recomendado)

**Com Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Com Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Com PHP:**
```bash
php -S localhost:8000
```

**Com VS Code Live Server:**
1. Instale a extensão "Live Server"
2. Clique com botão direito no `index.html`
3. Selecione "Open with Live Server"

Depois acesse: `http://localhost:8000`

### 3. Personalizar o Site

#### Alterar Textos
Edite o arquivo `index.html` e modifique:
- Slogan principal
- Descrições dos cursos
- Informações de contato
- Links das redes sociais

#### Alterar Cores
Edite o arquivo `style.css` e procure por:
- `.bg-primary` → Cor principal
- `.btn-warning` → Cor dos botões
- `.text-success` → Cor de destaque

#### Adicionar Imagens
1. Siga as instruções em `img/README.md`
2. Adicione suas imagens com os nomes corretos
3. Tamanhos recomendados:
   - Carrossel: 1920x600px
   - Sobre: 800x600px

#### Configurar Links Sociais
No `index.html`, substitua os `#` pelos links reais:
```html
<a href="https://facebook.com/seu-perfil" class="btn btn-outline-light btn-lg mx-2">
    <i class="fab fa-facebook-f"></i>
</a>
```

## 🎨 Recursos e Funcionalidades

### Carrossel Automático
- Troca de slides a cada 5 segundos
- Controles de navegação (setas e indicadores)
- Pode ser controlado com teclado (← →)

### Animações
- Fade in ao rolar a página
- Contadores animados nas estatísticas
- Efeitos hover nos cards e botões
- Parallax suave no carrossel

### Responsivo
- Adapta-se a diferentes tamanhos de tela
- Mobile-first design
- Menu hambúrguer em dispositivos móveis

### Easter Egg 🎮
Digite o código Konami no teclado:
```
↑ ↑ ↓ ↓ ← → ← → B A
```

### Aviso de Cookies
- Aparece automaticamente após 2 segundos
- Salvo no localStorage do navegador
- Não aparece novamente após aceitar

## 📱 Compatibilidade

O site é compatível com:
- ✅ Chrome/Edge (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari (versões recentes)
- ✅ Opera (versões recentes)
- ✅ Dispositivos móveis (iOS/Android)

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e animações
- **JavaScript (Vanilla)** - Interatividade
- **Bootstrap 5.3** - Framework CSS
- **Font Awesome 6.4** - Ícones

## 📞 Configurações de Contato

### WhatsApp
Altere o número no `index.html`:
```html
<a href="https://wa.me/5511999999999" class="btn btn-success">
```
Substitua `5511999999999` pelo seu número (código do país + DDD + número)

### E-mail
Altere o e-mail no `index.html`:
```html
<a href="mailto:contato@aliado.com.br" class="btn btn-warning">
```

## 🎯 Próximos Passos

1. **Adicionar Imagens Reais**
   - Baixe imagens de qualidade de sites como Unsplash ou Pexels
   - Siga as especificações em `img/README.md`

2. **Configurar Vídeos do YouTube**
   - Substitua os IDs dos vídeos no `index.html`
   - Procure por `embed/dQw4w9WgXcQ` e substitua

3. **Adicionar Sistema de Login**
   - Implemente autenticação (backend necessário)
   - Configure banco de dados

4. **Integrar Pagamentos**
   - Adicione gateway de pagamento (Stripe, PagSeguro, etc.)
   - Configure os valores dos cursos

5. **SEO e Performance**
   - Adicione meta tags para redes sociais
   - Otimize imagens
   - Configure Google Analytics

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais ou comerciais.

## 💡 Dicas

- **Performance**: Comprima as imagens antes de fazer upload
- **SEO**: Adicione meta descriptions e alt text em todas as imagens
- **Segurança**: Use HTTPS quando hospedar o site
- **Backup**: Faça backup regular dos arquivos

## 🆘 Suporte

Se encontrar problemas ou tiver dúvidas:
1. Verifique se todos os arquivos estão nas pastas corretas
2. Abra o Console do Desenvolvedor (F12) para ver erros
3. Certifique-se de que os links CDN do Bootstrap e Font Awesome estão funcionando

---

**Slogan:** Aliado - Aqui você não fica juruna! 🎓

Desenvolvido com ❤️ em 2026

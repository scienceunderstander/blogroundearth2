// --- Lógica do Botão Joinha (Com função de Descurtir) ---
const botaoLike = document.getElementById('botaoLike');
const contadorLike = document.getElementById('contador');
let cliquesLike = 0;
let jaDeuLike = false; 

botaoLike.addEventListener('click', () => {
    if (!jaDeuLike) {
        // Se NÃO deu like: adiciona a curtida
        cliquesLike++;
        contadorLike.textContent = cliquesLike;
        jaDeuLike = true; 
        
        // Feedback visual de ativo (fica um pouco mais opaco ou destacado)
        botaoLike.style.opacity = "0.7"; 
        botaoLike.style.border = "1px solid #58a6ff"; 
    } else {
        // Se JÁ deu like: remove a curtida (desfaz o clique acidental)
        cliquesLike--;
        contadorLike.textContent = cliquesLike;
        jaDeuLike = false; 
        
        // Volta o visual ao estado original
        botaoLike.style.opacity = "1";
        botaoLike.style.border = ""; 
    }
});

// --- Lógica do Botão Coração (Com função de Descurtir) ---
const botaoCoracao = document.getElementById('botaoCoracao');
const contadorCoracao = document.getElementById('contadorCoracao');
let cliquesCoracao = 0;
let jaDeuCoracao = false; 

botaoCoracao.addEventListener('click', () => {
    if (!jaDeuCoracao) {
        // Se NÃO deu coração: adiciona
        cliquesCoracao++;
        contadorCoracao.textContent = cliquesCoracao;
        jaDeuCoracao = true; 
        
        botaoCoracao.style.opacity = "0.7";
        botaoCoracao.style.border = "1px solid #ff7b72"; 
    } else {
        // Se JÁ deu coração: remove
        cliquesCoracao--;
        contadorCoracao.textContent = cliquesCoracao;
        jaDeuCoracao = false; 
        
        botaoCoracao.style.opacity = "1";
        botaoCoracao.style.border = ""; 
    }
});
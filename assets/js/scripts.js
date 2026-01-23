// Verificar se o usuário já fez uma escolha anteriormente
document.addEventListener('DOMContentLoaded', function() {
    const userLang = navigator.language || navigator.userLanguage;
    const langPreference = localStorage.getItem('languagePreference');
    
    // Se ainda não escolheu e o navegador está em inglês
    if (!langPreference && userLang.startsWith('en')) {
        mostrarModalIdioma();
    }
});

function mostrarModalIdioma() {
    const modal = document.createElement('div');
    modal.id = 'language-modal';
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ffffff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        max-width: 400px;
        width: 90%;
        font-family: 'Comfortaa', sans-serif;
        border: 2px solid #bd8735;
        opacity: 0;
        animation: modalFadeIn 0.5s ease-in-out forwards;
    `;
    
    modal.innerHTML = `
        <h3 style="
            margin: 0 0 15px 0; 
            font-weight: bold;
            color: #333;
            text-align: center;
            font-size: 1.3rem;
        ">English version available</h3>
        <p style="
            margin: 0 0 25px 0; 
            font-size: 1rem;
            color: #555;
            text-align: center;
            line-height: 1.6;
        ">Would you like to view this page in English?</p>
        <div style="display: flex; gap: 15px; justify-content: center;">
            <button onclick="escolherIdioma('en')" style="
                flex: 1;
                padding: 12px 20px;
                cursor: pointer;
                background-color: #bd8735;
                color: white;
                border: none;
                border-radius: 5px;
                font-family: 'Comfortaa', sans-serif;
                font-size: 1rem;
                transition: background-color 0.3s ease;
            " onmouseover="this.style.backgroundColor='#555'" 
               onmouseout="this.style.backgroundColor='#bd8735'">Yes / Sim</button>
            <button onclick="escolherIdioma('pt')" style="
                flex: 1;
                padding: 12px 20px;
                cursor: pointer;
                background-color: transparent;
                color: #bd8735;
                border: 2px solid #bd8735;
                border-radius: 5px;
                font-family: 'Comfortaa', sans-serif;
                font-size: 1rem;
                transition: all 0.3s ease;
            " onmouseover="this.style.backgroundColor='#bd8735'; this.style.color='white'" 
               onmouseout="this.style.backgroundColor='transparent'; this.style.color='#bd8735'">No / Não</button>
        </div>
    `;
    
    // Adicionar overlay escuro atrás da modal
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        opacity: 0;
        animation: overlayFadeIn 0.5s ease-in-out forwards;
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
}

function escolherIdioma(lang) {
    localStorage.setItem('languagePreference', lang);
    
    // Remover modal e overlay com animação
    const modal = document.getElementById('language-modal');
    const overlay = document.getElementById('modal-overlay');
    
    if (modal && overlay) {
        modal.style.animation = 'modalFadeOut 0.3s ease-in-out forwards';
        overlay.style.animation = 'fadeOut 0.3s ease-in-out forwards';
        
        setTimeout(() => {
            modal.remove();
            overlay.remove();
            
            if (lang === 'en') {
                window.location.href = '/en/index.html';
            }
        }, 300);
    }
}

function exibirSecao() {
    const btnToggleProjetos = document.querySelector(".toggle-btn");
    const timelineProjetosContainer = document.querySelector("#timeline-projetos-container-cl");
  
    if (timelineProjetosContainer.classList.contains("open")) {
      // Remover a classe "open" e contrair o container
      timelineProjetosContainer.classList.remove("open");
      timelineProjetosContainer.style.height = '0';
      timelineProjetosContainer.display = 'none';
      btnToggleProjetos.textContent = "Mostrar projetos";
    } else {
      // Adicionar a classe "open" e expandir o container
      timelineProjetosContainer.classList.add("open");
      btnToggleProjetos.textContent = "Ocultar projetos";
  
      // Calcular a altura do conteúdo
      setTimeout(() => {
        const height = timelineProjetosContainer.scrollHeight + "px";
        timelineProjetosContainer.style.height = height;
      }, 10);
    }
};
  
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Verificar se o link é uma âncora dentro da mesma página
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(this.getAttribute('href'));
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

window.onscroll = function() {
    const btn = document.getElementById("top-btn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};


function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
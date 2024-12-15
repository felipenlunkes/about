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
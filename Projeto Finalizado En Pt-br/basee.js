// Dropdown do menu
        function toggleDropdown() {
            const dropdown = document.querySelector('.dropdown');
            dropdown.classList.toggle('active');
        }

        document.addEventListener('click', function(event) {
            const dropdown = document.querySelector('.dropdown');
            const isClickInside = dropdown.contains(event.target);

            if (!isClickInside) {
                dropdown.classList.remove('active');
            }
        });

// DOT        
        // Decoração do mouse de bolha seguindo o mouse (se quiser tirar pode tirar)
        const dot = document.querySelector('.dot');

        document.addEventListener('mousemove', (e) => {
        // Define a posição da bolinha
        dot.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
        dot.style.transform += ' translate(-50%, -295%)'; // Centraliza a bolinha no ponteiro
        });



// ANIMAÇÃO DE RECOLHER A PÁGINA
        window.addEventListener('load', function() {
            const overlay = document.getElementById('loading-overlay');
            
            // Espera 1 segundo para que a animação de recolhimento da bola aconteça
            setTimeout(() => {
                overlay.classList.add('hide'); // Adiciona classe para esconder o overlay
            }, 1000); // Tempo igual ao da animação de encolhimento da bola
        });
        
// ANIMAÇÃO DE EXPANDIR A PÁGINA
        document.querySelectorAll('.dropdown-content a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Impede o comportamento padrão do link
        
                // Captura a posição do mouse no clique
                const mouseX = event.clientX;
                const mouseY = event.clientY;
        
                // Adiciona a classe para iniciar a animação
                const overlay = document.getElementById('animation-overlay');
                
                // Atualiza a posição do overlay com base no clique
                overlay.style.left = `${mouseX}px`;
                overlay.style.top = `${mouseY}px`;
        
                // Inicia a animação de expansão
                overlay.classList.add('active');
        
                // Define um tempo para esperar a animação concluir antes de redirecionar
                setTimeout(() => {
                    window.location.href = this.href; // Redireciona para o novo site
                }, 900); // Tempo em milissegundos corresponde à duração da animação
            });
        });
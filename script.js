document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidad del botón épico para mostrar/ocultar el video
    const btnEpico = document.getElementById('btnVideoEpico');
    const videoContainer = document.getElementById('videoContainerModal');

    if (btnEpico && videoContainer) {
        btnEpico.addEventListener('click', () => {
            if (videoContainer.style.display === 'block') {
                videoContainer.style.display = 'none';
                btnEpico.textContent = 'Ver Video Explicativo';
            } else {
                videoContainer.style.display = 'block';
                btnEpico.textContent = 'Ocultar Video';
                videoContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // 2. Efecto interactivo de luz y estela de flores que siguen el movimiento del mouse
    const mouseGlow = document.getElementById('mouseGlow');
    const cursorFlowersSymbols = ['🌸', '🌺', '🌷', '🌹', '✨'];
    let lastFlowerTime = 0;

    document.addEventListener('mousemove', (e) => {
        if (mouseGlow) {
            mouseGlow.style.left = e.clientX + 'px';
            mouseGlow.style.top = e.clientY + 'px';
        }

        // Generar estela de flores al mover el mouse (con intervalo para no saturar)
        let currentTime = Date.now();
        if (currentTime - lastFlowerTime > 80) { // Frecuencia de aparición
            lastFlowerTime = currentTime;
            
            let cursorFlower = document.createElement('div');
            cursorFlower.className = 'cursor-flower';
            cursorFlower.innerHTML = cursorFlowersSymbols[Math.floor(Math.random() * cursorFlowersSymbols.length)];
            cursorFlower.style.left = e.clientX + 'px';
            cursorFlower.style.top = e.clientY + 'px';
            
            document.body.appendChild(cursorFlower);

            // Eliminar la flor de la estela después de que termine la animación
            setTimeout(() => {
                cursorFlower.remove();
            }, 900);
        }
    });

    // 3. Sistema de Modal / Lightbox para abrir imágenes en grande al hacer clic
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const zoomableImages = document.querySelectorAll('.zoomable');
    const closeModal = document.querySelector('.close-modal');

    zoomableImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 4. Generador dinámico de partículas y lluvia MASIVA de flores gigantes y coloridas en el fondo
    let fxContainer = document.createElement('div');
    fxContainer.className = 'background-effects';
    document.body.prepend(fxContainer);

    // Generar partículas claras rosadas flotantes
    for (let i = 0; i < 35; i++) {
        let particle = document.createElement('div');
        particle.className = 'particle';
        let size = Math.random() * 12 + 6 + 'px';
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDuration = (Math.random() * 6 + 4) + 's';
        particle.style.animationDelay = (Math.random() * 5) + 's';
        fxContainer.appendChild(particle);
    }

    // Generar lluvia masiva de flores de todos los colores y más grandes
    const flowersSymbols = ['🌸', '🌺', '🌷', '🌹', '🌻', '🌼', '✨', '💐', '💮', '🪷'];
    for (let j = 0; j < 45; j++) { // 45 flores abundantes cayendo por todo el fondo
        let flower = document.createElement('div');
        flower.className = 'falling-flower';
        flower.innerHTML = flowersSymbols[Math.floor(Math.random() * flowersSymbols.length)];
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = (Math.random() * 6 + 5) + 's';
        flower.style.animationDelay = (Math.random() * 8) + 's';
        flower.style.fontSize = (Math.random() * 16 + 20) + 'px'; // Tamaños más grandes
        fxContainer.appendChild(flower);
    }
});

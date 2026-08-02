document.addEventListener('DOMContentLoaded', () => {
    const btnEpico = document.getElementById('btnVideoEpico');
    const videoContainer = document.getElementById('videoContainerModal');

    if (btnEpico && videoContainer) {
        btnEpico.addEventListener('click', () => {
            // Alternar la visibilidad del video de manera interactiva y fluida
            if (videoContainer.style.display === 'block') {
                videoContainer.style.display = 'none';
                btnEpico.textContent = 'Ver Video Explicativo';
            } else {
                videoContainer.style.display = 'block';
                btnEpico.textContent = 'Ocultar Video';
                // Desplazamiento suave hacia el reproductor
                videoContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
});
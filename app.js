const buttons = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.tab-content');

buttons.forEach(button => {

    button.addEventListener('click', () => {

        // Quitar active de botones
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Ocultar secciones
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Activar botón actual
        button.classList.add('active');

        // Mostrar sección seleccionada
        const target = button.dataset.tab;

        document.getElementById(target).style.display = 'flex';
    });
});

// Mostrar solo inicio al cargar
sections.forEach(section => {
    section.style.display = 'none';
});

document.getElementById('inicio').style.display = 'flex';

// MÚSICA

const music = document.getElementById('bg-music');

const musicBtn = document.getElementById('music-btn');

let userPaused = false;

// Función reproducir

function playMusic() {

    if (!userPaused) {

        music.play()

        .then(() => {

            console.log('Música reproduciéndose');

        })

        .catch(() => {

            console.log('Autoplay bloqueado');

        });
    }
}

// Intentar autoplay al cargar

window.addEventListener('load', () => {

    playMusic();
});

// Intentar cuando usuario toque pantalla

document.addEventListener('click', () => {

    if (music.paused && !userPaused) {

        playMusic();
    }

}, { once: true });

// BOTÓN AUDIO

musicBtn.addEventListener('click', () => {

    if (music.paused) {

        userPaused = false;

        music.play();

        musicBtn.textContent = '🔊';

    } else {

        userPaused = true;

        music.pause();

        musicBtn.textContent = '🔇';

    }

});

// Botón activar/desactivar

musicBtn.addEventListener('click', () => {

    if (music.paused) {

        music.play();

        musicBtn.textContent = '🔊';

    } else {

        music.pause();

        musicBtn.textContent = '🔇';

    }

});
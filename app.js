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
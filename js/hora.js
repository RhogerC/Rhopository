function actualizarFechaYHora() {
    const ahora = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = ahora.toLocaleDateString('es-ES', opcionesFecha);
    const hora = ahora.toLocaleTimeString('es-ES');
    document.getElementById('hora').textContent = `${fecha} - ${hora}`;
}

// Actualiza la fecha y hora cada segundo
setInterval(actualizarFechaYHora, 1000);

// Llama una vez al cargar la página para evitar el retardo inicial
actualizarFechaYHora();

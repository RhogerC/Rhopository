// js/loadXml.js

/**
 * Carga el contenido de un archivo XML y lo muestra en un elemento HTML.
 * @param {string} filePath - La ruta relativa al archivo XML desde el HTML.
 * @param {string} containerId - El ID del elemento <pre><code> donde se mostrará el XML.
 */
function loadXmlContent(filePath, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Error: No se encontró el contenedor con ID "${containerId}"`);
        return; // Salir si el contenedor no existe
    }

    // Mostrar mensaje de carga inicial
    container.textContent = `Cargando ${filePath}...`;
    container.style.color = '#888'; // Color gris para carga

    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP ${response.status} al cargar ${filePath}`);
            }
            return response.text();
        })
        .then(xmlContent => {
            container.textContent = xmlContent;
            container.style.color = '#333'; // Restaurar color de texto normal
            // Puedes añadir aquí la inicialización de librerías de resaltado de sintaxis si usas alguna
            // Por ejemplo, si usas Prism.js: Prism.highlightElement(container);
        })
        .catch(error => {
            console.error(`Error al cargar o procesar ${filePath}:`, error);
            container.textContent = `Error al cargar ${filePath}: ${error.message}`;
            container.style.color = 'red';
            container.style.whiteSpace = 'normal';
        });
}

// Opcional: Puedes añadir aquí las llamadas si sabes que siempre serán las mismas
// y usar 'defer' en la etiqueta script del HTML.
 document.addEventListener('DOMContentLoaded', function() {
     loadXmlContent('Propuestos/Propuesto1_Tema4.xml', 'xml-Propuesto4.1');
     loadXmlContent('Propuestos/Propuesto3_Tema4_comercio.xml', 'xml-Propuesto4.3-comercio');
     loadXmlContent('Propuestos/Propuesto3_Tema4_compra.xml', 'xml-Propuesto4.3-compra');
     loadXmlContent('Propuestos/Propuesto3_Tema4_ticket_final.xml', 'xml-Propuesto4.3-ticket-final');
     loadXmlContent('Propuestos/Propuesto3_Tema4_ticket.xml', 'xml-Propuesto4.3-ticket');


     
     loadXmlContent('Propuestos/Propuesto5_Tema4_Temporada.xsd', 'xsd-Propuesto4.5');
     loadXmlContent('Propuestos/Propuesto6_Tema4_Curriculum.xsd', 'xsd-Propuesto4.6');
     loadXmlContent('Propuestos/Propuesto7_Tema4_Curriculum.xsd', 'xsd-Propuesto4.7');
     loadXmlContent('Propuestos/Propuesto8_Tema4_Mensaje.xsd', 'xsd-Propuesto4.8');
     loadXmlContent('Propuestos/Propuesto10_Tema4_Tipos.xsd', 'xsd-Propuesto4.10');
 });

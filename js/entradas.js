// script.js para entradas del sitio
const entradas = [
    { titulo: "Tema 6 Lenguaje de Marcas", "url": "https://rhogerc.github.io/Rhopository/asignaturas/LM/3EV/Tema6/Tema6LM.html", "fecha": "19-05-2025" }, 
    { titulo: "Tema 5 Lenguaje de Marcas", "url": "https://rhogerc.github.io/Rhopository/asignaturas/LM/3EV/Tema5/Tema5LM.html", "fecha": "19-05-2025" },   
    { titulo: "Tema 4 Lenguaje de Marcas", "url": "https://rhogerc.github.io/Rhopository/asignaturas/LM/2EV/Tema4/Tema4LM.html", "fecha": "19-05-2025" },
    { titulo: "Tema 3 Lenguaje de Marcas", "url": "https://rhogerc.github.io/Rhopository/asignaturas/LM/1EV/Tema3/Tema3LM.html", "fecha": "05-12-2024" },
    { titulo: "Tema 2 Lenguaje de Marcas", "url": "https://rhogerc.github.io/Rhopository/asignaturas/LM/1EV/Tema2/Tema2LM.html", "fecha": "05-12-2024" },
    { titulo: "Acerca de mi", "url": "https://rhogerc.github.io/Rhopository/about.html", "fecha": "05-12-2024" }
];

// Ordenar por fecha (últimos primero)
entradas.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

// Renderizar en el bloque central
const centralBlock = document.getElementById("central-block");
entradas.forEach((entrada, index) => {
    if (index < 6) { // Mostrar solo las 6 últimas
        const article = document.createElement("article");
        article.innerHTML = `
            <h3><a href="${entrada.url}" target="_self">${entrada.titulo}</a></h3>
            <p>Publicado el: ${entrada.fecha}</p>
        `;
        centralBlock.appendChild(article);
    }
});
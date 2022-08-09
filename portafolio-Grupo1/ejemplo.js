// Modificación mediante etiqueta
const titulo = document.querySelector('h2');
titulo.textContent = "GRUPO 1"

//Modificación mediante una clase
const portafolio  = document.querySelector('.portfolio__title');
portafolio.textContent = "Proyectos Académicos";
portafolio.innerHTML = "<em>Proyectos Académicos</em>"

//Modificación mediante id
const principal = document.getElementById('prin');
principal.textContent = "Mis proyectos Académicos"

//Clonar sección
const articulo = document.querySelector('article');
const articulo2 = articulo.cloneNode(true);
const seccion = document.getElementById('portfolio')

articulo.appendChild(articulo2);





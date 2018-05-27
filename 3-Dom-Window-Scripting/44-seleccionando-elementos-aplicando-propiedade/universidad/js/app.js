// Eliminar de Local Storage
localStorage.clear();

//seleccionar un solo elemento con js
let elemento;

//elemento=document.getElementById('hero');
//retornar el nombre del id
//elemento=elemento.id;

let encabezado=document.getElementById('encabezado');
//cambiar css
encabezado.style.background='#333';
encabezado.style.color='#fff';
encabezado.style.padding='20px';

//acceder al texto
textoEncabezado=encabezado.textContent;
//tambien lo mismo
textoEncabezado=encabezado.innerText;
//cambiar texto
encabezado.textContent='Los mejores cursos';

console.log(textoEncabezado);
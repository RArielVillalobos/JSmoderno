// Eliminar de Local Storage
localStorage.clear();
//realizar modificaciones en el dom

const nuevoEncabezado=document.createElement('h2');

//agregar id
nuevoEncabezado.id='encabezado';
//console.log(nuevoEncabezado);
//agregar nuevo texto // el texto sera el hijo del h2(padre)
nuevoEncabezado.appendChild(document.createTextNode('Los mejorcitos Cursos'));
const anterior=document.getElementById('encabezado');
console.log(anterior.parentElement);
//eleemnto padre
const elementoPadre=document.querySelector('#lista-cursos');

//remplazamos el anterior encabezado con el nuevo
//siempre se reemplaza yendo hacia el padre
elementoPadre.replaceChild(nuevoEncabezado,anterior);




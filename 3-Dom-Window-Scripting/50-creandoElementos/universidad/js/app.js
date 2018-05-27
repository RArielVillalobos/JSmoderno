// Eliminar de Local Storage
localStorage.clear();

//crear elemento con js

//crear enlace
const enlace=document.createElement('a');

//agregando clase
enlace.className='enlace';
//añadir id
//enlace.id='nuevoid';

//agregando atributo
enlace.setAttribute('href','#');

//añadir texto
enlace.textContent='Nuevo Enlace'

//otra opcion
//enlace.appendChild(document.createTextNode('New Enlace'));

//agregarlo al html
document.querySelector('#secundaria').appendChild(enlace);
console.log(enlace);


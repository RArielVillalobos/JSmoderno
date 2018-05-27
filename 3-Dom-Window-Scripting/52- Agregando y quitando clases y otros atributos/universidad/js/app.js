// Eliminar de Local Storage
localStorage.clear();

//un elemento puede ser agregado por si mismo o por su padre a diferencia de sustituir uno que
//si o si debe ser de un padre
/*
const enlaces=document.querySelectorAll('.enlace');
const navegacion=document.querySelector('#principal');
//desde el mismo
//enlaces[0].remove();

//otra alternativa desde el padre
navegacion.removeChild(enlaces[1]);

//console.log(enlaces);
*/
const primerLi=document.querySelector('.enlace');
//console.log(primerLi);
let elemento;
//obtener clase de css
elemento=primerLi.className;
//añadir clase
elemento=primerLi.classList.add('nueva-clase');
//eliminarla
elemento=primerLi.classList.remove('nueva-clase');
//en lista
elemento=primerLi.classList;


//leer atributo
elemento=primerLi.getAttribute('href');
primerLi.setAttribute('href','http://google.com');
//elemento=primerLi;
primerLi.setAttribute('data-id',20);
//comprueba si existe un atributo , devuelve true en caso de afirmativo
elemento=primerLi.hasAttribute('data-id');
//eliminar atributo
primerLi.removeAttribute('data-id');
elemento=primerLi;
console.log(elemento);












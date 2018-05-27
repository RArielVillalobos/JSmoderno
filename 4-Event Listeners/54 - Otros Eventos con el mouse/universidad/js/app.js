// Eliminar de Local Storage
localStorage.clear();

const encabezado=document.querySelector('#encabezado');
const enlaces=document.querySelectorAll('.enlace');
const botonVaciar=document.querySelector('#vaciar-carrito');
//EVENTO CLICK
//botonVaciar.addEventListener('click',obtenerEvento);

//EVENTO DOBLECLICK
//botonVaciar.addEventListener('dblclick',obtenerEvento);

//EVENTO MOUSE ENTER//PONERSE ARRIBA DEL BOTON
//botonVaciar.addEventListener('mouseenter',obtenerEvento);

//EVENTO MOUSE LEAVE//SALIR DEL BOTON
//botonVaciar.addEventListener('mouseleave',obtenerEvento);

//EVENTO MOUSE OVER
//botonVaciar.addEventListener('mouseover',obtenerEvento);

//EVENTO MOUSE OUT/SIMILAR A MOUSE LEAVE
//botonVaciar.addEventListener('mouseout',obtenerEvento);

//MOUSE DOWN/cuando presionas
//botonVaciar.addEventListener('mousedown',obtenerEvento);

//MOUSE UP/cuando presionas y suelto
//botonVaciar.addEventListener('mouseup',obtenerEvento);

//MOUSE MOVE/cuando moves el mouse
botonVaciar.addEventListener('mousemove',obtenerEvento);

//el e es el q tiene toda la info relacionada a los eventos
//e.type nos retornara el tipo de evento
function obtenerEvento(e){
    console.log(`Evento: ${e.type}`)

}
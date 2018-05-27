// Eliminar de Local Storage
localStorage.clear();

const buscador=document.getElementById('buscador');
//al escribir
//buscador.addEventListener('keydown',obtenerEvento);

//cada vez que sueltas o presionas
//buscador.addEventListener('keyup',obtenerEvento);

//cada vez que escribes una tecla
buscador.addEventListener('keypress',obtenerEvento);

//cuando haces click dentro del input
//buscador.addEventListener('focus',obtenerEvento);

//cuando haces click afuera del input//este es uno de los mas usadoss
//buscador.addEventListener('blur',obtenerEvento);


//cuando aplico el cortar
//buscador.addEventListener('cut',obtenerEvento);

//cuando copio
//buscador.addEventListener('copy',obtenerEvento);

//cuando pego
//buscador.addEventListener('paste',obtenerEvento);

//este es uno general, cuando detecte un evento de los que vimos 
//buscador.addEventListener('input',obtenerEvento);

//cuando seleccionas una opcion y luego cambias, el change esta pendiente a esos cambios
//buscador.addEventListener('change',obtenerEvento);



function obtenerEvento(e){
    //el .value te da el valur que esta escrito en el input
    //console.log(buscador.value);
    console.log(e.type);

    document.querySelector('#encabezado').innerText=buscador.value;
}
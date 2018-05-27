// Eliminar de Local Storage
localStorage.clear();

//query selector
//se usa la sintaxis de css para acceder al elemento # para id o . para clase
//deferencia getElementById solo selecciona id, en cambio querySelector puede seleccionar clase
//los dos solo retornar un valor
let encabezado=document.querySelector('#encabezado');
//para seleccionar todos se usa querySelectorAll

//tambien podemos crear un selector de esta forma, en la clase card hay una imagen
 encabezado=document.querySelector('.card img');


//aplicar css
//encabezado.style.background='#333';
//encabezado.style.color='white';

//selectores disponibles en css3
let enlace 
enlace=document.querySelector('#principal a:first-child');
enlace=document.querySelector('#principal a:last-child');
enlace=document.querySelector('#principal a:nth-child(3)');
console.log(enlace);
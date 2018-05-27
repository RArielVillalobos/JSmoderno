// Eliminar de Local Storage
localStorage.clear();

//retornara una coleccion de enlace
const enlaces=document.getElementsByClassName('enlace');
enlaces[1].style.background='red';

//console.log(enlaces);

//mezclar querySelector con ByClassName
//const listaEnlaces=document.querySelector('#principal').getElementsByClassName('enlace');

//retornara en una coleccion todos los a de la pagina
const links=document.getElementsByTagName('a');
links[18].style.color='green';

//convertir a arreglo
let linksArray=Array.from(links);

linksArray.forEach(enlace => {
    console.log(enlace.textContent);
    
});

//console.log(linksArray);
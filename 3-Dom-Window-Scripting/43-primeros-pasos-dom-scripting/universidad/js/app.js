// Eliminar de Local Storage
let elemento;
elemento=document;
elemento=document.all;
elemento=document.all[10];
elemento=document.head;

elemento=document.images;
elemento=document.images[1];
elemento=document.images[1].src;

elemento=document.images;

let imagenes=document.images;
let imagenesArr=Array.from(imagenes);
//console.log(imagenesArr);

imagenesArr.forEach(imagen => {
    console.log(imagen);
    
});
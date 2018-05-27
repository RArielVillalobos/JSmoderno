// Eliminar de Local Storage
localStorage.clear();
//querySelector solo devuelve un resultado, el primero que encuentre en cambio querySelectorAll retornara todos los q encuentre

/*
//nos retornara un nodelist,
const enlaces=document.querySelectorAll('#principal .enlace');
enlaces[1].style.color='red';
//console.log(enlaces);*/

//seleccionando impares
const enlaces=document.querySelectorAll('#principal a:nth-child(odd)');
enlaces.forEach(function(impar){
    impar.style.background='red';
    impar.style.color='white'; 

})
//console.log(enlaces);

// Eliminar de Local Storage
/*localStorage.clear();

//traversing del hijo a padre
const enlaces=document.querySelectorAll('.enlace');
//ira a la navegacion principal
//console.log(enlaces[0].parentNode);
//tambien, se recomienda usar este de abajo
//console.log(enlaces[0].parentElement);

//navegando hacia los elementos padres
console.log(enlaces[0].parentElement.parentElement.parentElement);*/

//const cursos=document.querySelectorAll('.card');
//console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent='hola');


//OTRA FORMA DE HACER TRAVERSING
const enlaces=document.querySelectorAll('.enlace');
//metiendome a temas, pero con previusElementSibling, voy al enlace que esta antes
//para ir al siguiente podemos usar nextElementSibling
console.log(enlaces[4].previousElementSibling);
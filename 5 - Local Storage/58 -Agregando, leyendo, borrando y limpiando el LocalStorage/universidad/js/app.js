// Eliminar de Local Storage
localStorage.clear();

//localStorage permite añadir cierta informacion al navegador de nuestro visitante

//agregar o modifico el localStorage,solamente se borra si el usuario borra desde cache o desde navegador
localStorage.setItem('nombre','ariel');
//eliminar de localstorage
//localStorage.removeItem('nombre');

//eliminar todo el local storage
//localStorage.clear();

//obtener valor de localstorage
const nombre=localStorage.getItem('nombre');
console.log(nombre);



//sessionStorage/cuando se cierra el navegador el session storage se borra
sessionStorage.setItem('nombre','ruben');

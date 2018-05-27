// Eliminar de Local Storage
localStorage.clear();

//event click al buscador
/*document.querySelector('#submit-buscador').addEventListener('click',function(e){
    //lo que esta aca dentro es lo q se va a ejecutar 
    
    //cuando damos click  a un formulario por default se ejecuta el action, a donde ira el formulario
    //para prevenir ese comportmiento por defecto usamos preventDefault()

    e.preventDefault();
    alert('buscando Cursos');
    
   

});*/
//otra forma similar con la funcion separada
/*document.querySelector('#submit-buscador').addEventListener('click',ejecutarBoton);

function ejecutarBoton(e){
    e.preventDefault();
    let elemento;
    elemento=e;
    elemento=e.target;
    elemento=e.target.id;
    elemento=e.target.className;
    elemento=e.target.innerText;

    console.log(elemento);
}*/

//EVENTO A UN ELEMENTO QUE NO SEA FORMULARIO
document.querySelector('#encabezado').addEventListener('click',function(e){
    //let elemento;
    //elemento=e.target.innerText;
    //console.log(elemento);
    e.target.innerText='Nuevo encabezado';
});

// Eliminar de Local Storage
localStorage.clear();

//event bubbling
//es cuando tenes un elemento y das click en el otros elementos son seleccionados o presionados
const card=document.querySelector('.card');
const infoCurso=document.querySelector('.info-card');
const agregarCarrito=document.querySelector('.agregar-carrito');

card.addEventListener('click',function(e){
    console.log('click en card');
    e.stopPropagation();
});

infoCurso.addEventListener('click',function(e){
    console.log('click en info');
    e.stopPropagation();
    
});


//cuando haga click en este se van  a ejecutar los otros dos, ya que este boton esta dentro del div de card y en el div de infocard
//con e.stopPropagation evitamos que pase el event bubbling

//hay otra forma mejor de hacer esto y se lo conoce como delegation
agregarCarrito.addEventListener('click',function(e){
    console.log('click en agregar a Carrito');
    e.stopPropagation();
    //e.preventDefault();
});
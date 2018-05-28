// Eliminar de Local Storage
localStorage.clear();
//delegation

//escuchar cualquier click en todo el documento
document.body.addEventListener('click',function(e){
    e.preventDefault();
    //console.log('click');
    //target/(a que etiqueta se le aplica el click)
    //console.log(e.target.classList);

    if(e.target.classList.contains('borrar-curso')){
        console.log(e.target.parentElement.parentElement.remove());
    }
    if(e.target.classList.contains('agregar-carrito')){
        console.log('curso agregado');
    }
});

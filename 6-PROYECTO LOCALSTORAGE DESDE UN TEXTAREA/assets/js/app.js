
//variables
const listaTweets=document.getElementById('lista-tweets');



//event listeners
eventListeners();

function eventListeners(){
      document.getElementById('formulario').addEventListener('submit',agregarTweet);

      //borrar tweets
      listaTweets.addEventListener('click',borrarTweet);


}

//funciones

//añadir tweets del formulario
function agregarTweet(e){
    e.preventDefault();
    
    //leer valor del textarea
    const tweet=document.getElementById('tweet').value;
    //crear boton de eliminar
    const botonBorrar=document.createElement('a');
    botonBorrar.classList='borrar-tweet';
    botonBorrar.innerText='X';

    //crear elemento y añadir contenido a la lista
    const li=document.createElement('li');
    li.innerText=tweet;
    //añade el boton de borrar al tweet
    li.appendChild(botonBorrar);
    //añade el tweet a la lista
    listaTweets.appendChild(li);
}
function borrarTweet(e){
    e.preventDefault();
    //si usamos className seria asi e.target.className('borrar-tweet')
    if(e.target.classList.contains('borrar-tweet')){
        //recordemos que para borrar el elemento debemos ir al padre, en este caso con ir al li es suficiente
        e.target.parentElement.remove();
        alert('tweet eliminado');
    }
    
}



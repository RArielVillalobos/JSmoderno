
//variables
const listaTweets=document.getElementById('lista-tweets');



//event listeners
eventListeners();

function eventListeners(){
      document.getElementById('formulario').addEventListener('submit',agregarTweet);
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


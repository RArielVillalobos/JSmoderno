
//variables
const listaTweets=document.getElementById('lista-tweets');



//event listeners
eventListeners();

function eventListeners(){
      document.getElementById('formulario').addEventListener('submit',agregarTweet);

      //borrar tweets
      listaTweets.addEventListener('click',borrarTweet);

      //contenido cargado
      //esto es similar como al document ready d jquery, se carga cuando se cargo toda la pagina
      document.addEventListener('DOMContentLoaded',localStorageListo);
      




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
    //añadir al localstorage
    agregarTweetLocalStorage(tweet);
}
//elimina tweet del doom
function borrarTweet(e){
    e.preventDefault();
    //si usamos className seria asi e.target.className('borrar-tweet')
    if(e.target.classList.contains('borrar-tweet')){
        //recordemos que para borrar el elemento debemos ir al padre, en este caso con ir al li es suficiente
        e.target.parentElement.remove();
        //devolvera el string pero le sumara una X(debemos eliminarla)
        borrarTweetLocalStorage(e.target.parentElement.innerText);
        
    }
    
}

//agrega el tweet del localStorage
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets=obtenerTweetsLocalStorage();
    //añadir nuevo tweet
    tweets.push(tweet);
    //convertir de string a arreglo para ls
    //recordemos q localStorage solo lee string
    localStorage.setItem('tweets',JSON.stringify(tweets))
   
    

     
}
//comprobar que hayan elementos en localStorage,retorna un arreglo
function obtenerTweetsLocalStorage(){
    let tweets;
     //revisamos los valores de localStorage
     if(localStorage.getItem('tweets')==null){
         tweets=[];

     }else{
         tweets=JSON.parse(localStorage.getItem('tweets'));

     }
     return tweets;
}

function localStorageListo(){
    let tweets;
    tweets=obtenerTweetsLocalStorage();

    tweets.forEach(tweet => {
         
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
        //añadir al localstorage
        
        
    });
    
}
//eliminar tweet del localStorage
function borrarTweetLocalStorage(contenidoTweet){
    let tweets,tweetBorrar;
    //elimina la x del tweet
    tweetBorrar=contenidoTweet.substring(0,contenidoTweet.length-1);
    
    tweets=obtenerTweetsLocalStorage();
    //busca y elimina del arreglo tweet repetidos
    tweets.forEach(function(tweet,index){
        if(tweetBorrar===tweet){
            tweets.splice(index,1);
        }

    });
    localStorage.setItem('tweets',JSON.stringify(tweets));

    

    
}



//function declaration

function saludar(nombre='ariel'){
    return document.write(nombre);
}

//saludar();


//function expression

const suma=function(num1,num2){
    return document.write(num1+num2);


}

//suma(5,5);

//funciones IIFE que se declaran y embocan rapidamente 
/*(function() {
    console.log('creando un iife');
})();*/

//metodos de propiedad/cuando una function se pone en un objeto
const musica={
    reproducir:function(cancion){
        console.log('reproduciendo '+cancion);
    }

}

musica.reproducir('Linkin Park');


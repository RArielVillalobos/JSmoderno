//ordenar arreglo

const frutas=['manzana','banana','uva','mandarina'];
//ordenar alfabeticamente
frutas.sort();
//onsole.log(frutas);

//ordenar numeros
//recordar que si una variable es let puedo reescribirla
let numeros1=[3,91,92,100,5,6,4,7,8,9];
//console.log(numeros1);
//asi se ordena de forma desordenada
numeros1.sort();
console.log(numeros1);

//forma ordenada
numeros1.sort(function(x,y){
    return x-y;

});

console.log(numeros1);

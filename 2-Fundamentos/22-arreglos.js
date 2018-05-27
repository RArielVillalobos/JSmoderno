const numeros=[10,20,30,40,50];
//console.log(numeros);

//arreglos para string , metodo alternativo
const meses=new Array('enero','febrero','marzo');
//ver cuantos elementos hay en un arreglo
console.log(meses.length);

//comprobar si es un arreglo o no
//console.log(Array.isArray(meses));

//funciones para arreglos

//sumar un elemento a lo ultimo
//meses.push('hola');

//buscar elemento en un arreglo
//si lo encontra devolvera el numero de posicion del elemento y sino devolvera -1

//console.log(meses.indexOf('marzo'));

//eliminar elemento de un arreglo
//meses.pop('marzoo');

//eliminar el primer elemento del arreglo
//meses.shift();

//ELIMINAR UN RANGO
//el primer parametro es el elemento desde donde deseo eliminar, y el otro parametro es cuantos elementos mas
//meses.splice(1,1);

//revierte el arreglo
//meses.reverse()

//unir arreglos
const arreglo1=[1,2,3,4,5];
const arreglo2=[6,7,8,9,10];
var nuevoArreglo=arreglo1.concat(arreglo2);
console.log(nuevoArreglo);

const frutas=['platano','manzana','mandarina'];
//ordenar por orden alfabetico
console.log(frutas);


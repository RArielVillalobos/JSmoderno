// Eliminar de Local Storage
localStorage.clear();
//EN ESTA CLASE HAREMOS TRAVERSING DEL PADRE AL HIJO

//ir del padre al hijo y del hijo al padre(selectores)
const navegacion=document.querySelector('#principal');
//lo que sale como text son los espacios
//console.log(navegacion.childNodes);

//evitar el comportamiento anterior
//los nodos son las etiquetas html de nuestro documento
//console.log(navegacion.children[0].nodeName);

//tipos de nodo(usualmente regresan numeros)
/*
1=elementos html
2=atributos
3=textos node
8=comentarios
9=documentos
10=doctype

*/
//console.log(navegacion.children[0].nodeType);

//el children retornara los hijos del selector actual
//console.log(navegacion.children);

//otro ejemplo
//const barra=document.querySelector('.barra')
//console.log(barra.children[0].children[0].children);

const cursos=document.querySelectorAll('.card');
console.log(cursos);
console.log(cursos[0].lastElementChild);
console.log(cursos[0].firstElementChild);
console.log(cursos[0].childElementCount);




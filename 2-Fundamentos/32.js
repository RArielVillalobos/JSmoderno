//en javascript existe un objeto que se llama Date
const diaActual=new Date();
//console.log(diaActual);
//fecha en especifico mes,dia,año
let navidad2017=new Date('12-25-2017');
//console.log(navidad2017);

let valor;
//mes
//0 es ener0
valor=diaActual.getMonth();

//dia
valor=diaActual.getDate();

//año
valor=diaActual.getFullYear();

//minutos
valor=diaActual.getMinutes();

//hora
valor=diaActual.getHours();

//milisegundos desde 1970
valor=diaActual.getTime();

//modificar un vaor
valor=diaActual.getFullYear();
valor=diaActual.setFullYear(2016);
valor=diaActual.getFullYear();

document.write(valor);






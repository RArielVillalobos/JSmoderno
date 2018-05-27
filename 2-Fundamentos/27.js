//arreglos con objetos
const autos=[
    {nombre:'Mustang',motor:'6.0'},
    {nombre:'Camaro',motor:'6.1'},
    {nombre:'Challenguer',motor:'6.2'},

];
console.log(autos);
//accediendo a un solo valor
console.log(autos[0].nombre);

//recorrer arreglo de objeto con for

var html='';
for(var i=0; i<autos.length; i++){
    html=html+`<ul>
        <li>Nombre:${autos[i].nombre}</li>
    
    </ul>`;
}

document.getElementById('app').innerHTML=html;
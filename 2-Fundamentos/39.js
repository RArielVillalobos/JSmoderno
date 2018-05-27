const pendientes=[
    'Tarea','Comer','Proyecto','Aprender Javascript'
];

/*pendientes.forEach(element => {
    document.write(element);
    
});*/

//otra forma

pendientes.forEach(function(pendiente,index){
  console.log(`Posicion ${index}: ${pendiente}`);
});

//MAP para recorrer un arreglo de objetos

const carrito=[
    {id:1,producto:'Libro'},
    {id:2,producto:'Cartuchera'},
    {id:3,producto:'Carpeta'}
]
const nombreProducto=carrito.map(function(carrito){
       return carrito.producto;
});

//console.log(nombreProducto);

//recorrer objeto con for
const automovil={
    nombre:'Camaro',
    motor:'V8',
    anio:200,
}

for (const auto in automovil) {
    console.log(`NombrePropiedad:${auto}:${automovil[auto]}`);
}
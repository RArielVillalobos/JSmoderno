//funcion que no existe
try {
    algo();
} catch (error) {
    console.log(error);
}finally{
    console.log('no le importa lo que pase, se ejecuta de todos modos');
}



function obtenerClientes(){
    console.log('descargando');

    setTimeout(function(){
      console.log('completo');
    },3000);
}

obtenerClientes();
//creando objeto
const persona={
    nombre:'ariel',
    apellido:'villalobos',
    profesion:'programador',
    email:'correo@correo',
    edad:21,
    musica:['linkin park','limp bizkit'],
    hogar:{
        ciudad:'loncopue',
        provincia:'neuquen',
    },
    //en un objeto podemos poner funciones
    fechaNacimiento:function(){
       return new Date().getFullYear()-this.edad;
    }
}

//de la forma que accedemos a los valores es con el .
console.log(persona);
//accediendo a un atributo
console.log(persona.nombre);
//acceder al arreglo
//console.log(persona.musica);

//otra forma de acceder al objeto (no recomendada) usando []
//console.log(persona['edad']);

//ACCEDIENDO A UNA FUNCION DEL OBJETO
document.write(persona.fechaNacimiento());


//PERSONA 2
const persona2={
    nombre:'hernan',
    apellido:'villalobos',
    profesion:'programador',
    email:'correo@correo',
    edad:22,
    musica:['linkin park','limp bizkit'],
    hogar:{
        ciudad:'loncopue',
        provincia:'neuquen',
    },
    //en un objeto podemos poner funciones
    fechaNacimiento:function(){
       return new Date().getFullYear()-this.edad;
    }
}
document.write(persona2.fechaNacimiento());

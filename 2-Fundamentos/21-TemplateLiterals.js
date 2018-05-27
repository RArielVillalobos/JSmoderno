const producto='Pizza',
      precio=30,
      producto2='Hamburguesa',
      precio2=40;

let html;

//forma vieja de crear un template html
//html='<ul>'+
      '<li>Orden:'+ producto+'</li>'+
      '<li>Precio:'+precio+'</li>'+
      '<li>Orden:'+producto2+'</li>'+
      '<li>Precio:'+precio2+'</li>'+
      '<li>Total:'+(precio+precio2)+'</li>'+
      '</ul>'
//enviando template al dom
//document.getElementById('app').innerHTML=html;

//NUEVA FORMA TEMPLATE LITERALS O STRING TEMPLATE
//se usa comillas invertidas , el sgno $ y llaves
//ademas puede llevar funciones en su templates

html=`
    <ul>
        <li>Orden:${producto} </li>
        <li>Precio:${precio}</li>
        <li>Orden:${producto2} </li>
        <li>Precio:${precio2}</li>
        <li>Total:${total(precio,precio2)}</li>

   </ul>
        `;

        function total(precio1,precio2){
            return precio1+precio2;
        }

document.getElementById('app').innerHTML=html;        


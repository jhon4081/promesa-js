

var promesa = new Promise(function(resolve, reject) {

let s = "hola mundo";

  if ( s === 9) {
  resolve('buenas tardes');
  } else{
    reject('error');
  }

});
 
  
//en esta promesa se evalua si el contenido de la variable s es igual a un numero entonces el resultado nos va a dar un error

  
  

  
promesa.then( function(res)   {
  console.log(`Se imprimió el ${res}`)
}).catch( function(error) {
console.log( `Error en la promesa:  ${error}` )
  });





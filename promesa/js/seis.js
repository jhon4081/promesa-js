
var promise = new Promise(function(resolve, reject) {
  
    function saludar () {
      resolve('Hola')
    }
  
    setTimeout(saludar, 10000);

    reject('chao');
  
  })
  
  console.log(promise);
  // en esta promesa se evalua si el mensaje se muestra en el tiempo correcto si no se mostrara otro mensaje
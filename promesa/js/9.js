let p = new Promise(function (resolve,reject) {
  let resta = 10-5;
  if(resta ===3){
      resolve("correcto");
  }else{
      reject("error");
  }

  
});
p.then (function(mensaje){
  console.log(mensaje);

}).catch(function (error) {
  console.log(error);
});
// en esta promesa se evalua si el resultado es igual a 3
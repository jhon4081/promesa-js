let p = new Promise(function (resolve,reject) {
  let division = 10/0;
  if(division === 3){
      resolve("no se puede dividir entre cero");
  }else{
      reject("no se puede dividir entre cero");
  }

  
});
p.then (function(mensaje){
  console.log(mensaje);

}).catch(function (error) {
  console.log(error);
});
// se usa esta proesa para validar que no se puede dividir entre cero
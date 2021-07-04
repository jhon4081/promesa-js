function mp(){

  return  new Promise(function (resolve,reject) {
    let re = true;
    if(re === true){
let celular ={
  color: "negro",
  marca:"redmi note 10"
}

        resolve(celular);
    }else{
        reject("no obtuviste tu celelar");
    }
  
    
  });
}





mp().then (function(mensaje){
  console.log(mensaje);

}).catch(function (error) {
  console.log(error);
});

// en esta promesa  podemos obtener el resultado de la funcion retornada 
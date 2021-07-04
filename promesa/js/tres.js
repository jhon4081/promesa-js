let p = new Promise(function (resolve,reject) {
    let perimetro = 2+5+2+5;
    if(perimetro === 14){
        resolve("correcto");
    }else{
        reject("error");
    }
  
    
  });
  p.then (function(correcto){
    console.log(correcto);
  
  }).catch(function (error) {
    console.log(error);
  });
  //con esta promesa evaluamos si el  resultado del perimetro es correcto 
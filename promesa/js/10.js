let p = new Promise(function (resolve,reject) {
    let suma = 2+2;
    if(suma ===4){
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
// en esta promesa se usa el condicional para saber si el resultado de la suma es igual a 4
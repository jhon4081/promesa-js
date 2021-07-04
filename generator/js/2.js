let hola = (function*(){
    yield 1;
    yield 2;
})();
console.log(hola.next().value); 
console.log(hola.next().value); 
console.log(hola.next().value); 

//ese es un generador simple
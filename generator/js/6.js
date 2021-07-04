
function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  let s = [0, ...gen()];
  
  alert(s); 
  //en este ejemplo el generador nos va a mandar un alert con la secuencia de numeros
function* random(seed) {
    let value = seed;
  
    while(true) {
      value = value * 16807 % 2147483647
      yield value;
    }
  
  };
  
  let generator = random(1);
  
  alert(generator.next().value); 
  alert(generator.next().value); 
  alert(generator.next().value); 
  //en este codigo hacemos un random y el resultado lo enviamos mediante un alert
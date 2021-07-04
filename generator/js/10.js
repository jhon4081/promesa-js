function * n() {
    let num = 22;
    while (true) {
      yield num;
      num = num / 2
    }
  }
  const nu = n();
  console.log(nu.next().value)
  console.log(nu.next().value)
  console.log(nu.next().value)
   //en este generador se hace una division y se manda el resultado a la consola
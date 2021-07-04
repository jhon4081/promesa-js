function * n() {
    let num = 3;
    while (true) {
      yield num;
      num = num * 10
    }
  }
  const nu = n();
  console.log(nu.next().value)
  console.log(nu.next().value)
 //en este generador se hace una multilicacion 
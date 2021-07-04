function * s() {
    let num = 1;
    while (true) {
      yield num;
      num = num + 1
    }
  }
  const t = s();
  console.log(t.next().value)
  console.log(t.next().value)
  console.log(t.next().value)
  console.log(t.next().value)
  console.log(t.next().value)
  console.log(t.next().value);
  //en este generador se hace una suma y se muestra el resultado 6 veces
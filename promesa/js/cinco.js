const imprimirEn1Seg = (valor) => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(valor);
        resolve();
      }, 1000)
    });
  };
  imprimirEn1Seg(1)
.then(() => imprimirEn1Seg(2))
.then(() => imprimirEn1Seg(3));
// en esta promesa se evalua el tiempo en que se muestra el mensaje 
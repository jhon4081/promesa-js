console.log('buenas tardes');

    const promesa = new Promise(resolve => {
      resolve('hola mundo');
    });

    promesa.then( res => {
      console.log(`Se imprime  ${res}`)
    });

    console.log('hasta luego');
   // en este codigo solo se evalua el resolve ó el resultado correcto sin condiciones
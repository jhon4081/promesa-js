
var pioneer = new Proxy({}, {
    get: function(target, nombre, receiver) {
        console.log(`ejecutado "get" para propiedad: ${nombre}`);
        return Reflect.get(target, nombre, receiver);
    },
  
    set: function(target, nombre, value, receiver) {
        console.log(`ejecutado "set" para propiedad: ${nombre} y valor: ${value}`);
        return Reflect.set(target, nombre, value, receiver);
    }
  });

  pioneer.firstName = 'Grace';
  pioneer.secondName = 'Hopper';

  //en este ejercicio se usa get y set con proxy 
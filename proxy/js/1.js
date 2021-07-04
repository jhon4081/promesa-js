const persona = {
    nombre: 'jhon',
    apellido: 'mario'
  }
  
  const handler = {
    get(objeto, prop) {
      return objeto[prop] ?? 'Propiedad no encontrada';
    }
  }
  const proxyPersona = new Proxy(persona, handler);
  const nombre = proxyPersona.nombre;
console.log(nombre);
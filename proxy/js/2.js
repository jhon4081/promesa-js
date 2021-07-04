const proxy = new Proxy({}, { 
    set: (obj, prop, value) => {
      if (prop === "age") {
        obj[prop] = Number(value);
      }
    }
  });
  
  proxy.prop = "1";

  //en este proy se hace una condicion juno con un set
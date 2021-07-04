const obj = {
    get prop() {
      return this.__prop__;
    },
    set prop(value) {
      this.__prop__ = value * 2;
    },
  };
  
  obj.prop = 12;
  
  console.log(obj.prop); 
  // en este casose usa getters y setters para una multiplicacion
const o = {
    get p() {
      return this.__p__;
    },
    set p(value) {
      this.__p__ = value ^2;
    },
  };
  
  o.p = 8;
  
  console.log(o.p); 
  //  use getters y setters para una potencia
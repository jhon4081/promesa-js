class D {
    constructor() {
      this._valor=1;
    }
    
    get valor() {
      return this._valor;
    }
    
    set valor(v) {
      this._valor=v;
    }
    
    imprimir() {
      document.write(this.valor);
    }
  }
  
  const d1=new D();
  d1.imprimir();
  d1.valor=6;
  d1.imprimir();

  // se usa get  y set para un juego
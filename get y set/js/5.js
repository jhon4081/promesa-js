var per = { nombre: "mario", apellido: "rios"};
Object.d(per, 'hola', { 
    get: function () { 
        return this.nombre + " " + this.apellido;
    },
    set: function (value) {
        [this.nombre, this.apellido] = value.split(" ");
    }
});

console.log(per.hola); 

per.apellido = "emmA";
console.log(per.hola); 

per.hola = "Vanessa";
console.log(per.nombre) 

// se uso get y set para mandar un nombre yluego cambiarlo
var target = {};

var supero= new Proxy(target, {
   get: function(target, nombre) {
       console.log('ejecutado "get" para propiedad: ', nombre);
       return target[nombre];
   }
});

supero.power = 'Flight';
console.log(supero.power);
// se hace un llamado con  get sobre el objeto que está capturando en el proxy
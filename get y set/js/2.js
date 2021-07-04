var salud = "hola profe";

function get (salud) {
    console.log("esta es mi forma de saludar al profe"+salud);
}

function set(salud) {
    this.salud = "que mas";
}

get (salud);
set (salud);
get (salud);
// en este get se hizo un envio de un saludo
function* mensajes() {
 
    console.log("mensaje1");
    console.log("mensaje2");
    yield null;
    console.log("mensaje3");
     
    }
     
    var iterador = mensajes();
    iterador.next();
    console.log("MENSAJE4");
     
    iterador.next();
    //en este generador se muestran 4 mensajes
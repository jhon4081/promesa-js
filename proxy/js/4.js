function sum(a, b) {
    return a + b;
}

var handler = {
    apply: function(target, thisArg, argumentsList) {
        console.log(`Calcular la suma de: ${argumentsList}`);
        return target.apply(thisArg, argumentsList);
    }
};

var proxy = new Proxy(sum, handler);
proxy(1, 2);


//se intercepta un objetocon un metodo con proxy
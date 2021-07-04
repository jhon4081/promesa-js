function * fun()
{
    yield 10;
    yield 20;
    yield 30;    
}
var gen = fun();
document.write(gen.next().value);

document.write(gen.next().value);

document.write(gen.next().value);

//ccon este generador podemos mostrar los tres  numeross
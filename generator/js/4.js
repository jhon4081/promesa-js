const arr = ['a', 'b', 'c'];
  
function* generator() {
  yield 1;
  yield* arr;
  yield 2;
}
  
for (let value of generator()) {
  document.write(value);
}

//en este caso usamos un arreglo para luego mandarlo por el generadorS
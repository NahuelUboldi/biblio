const numeros = Array(200000).fill(5);

console.time('foreach()');
const res01 = numeros.forEach((x) => x * 5);
console.timeEnd('foreach()');

console.time('map()');
const res02 = numeros.map((x) => x * 5);
console.timeEnd('map()');

console.time('reduce()');
const res03 = numeros.reduce((acc, x) => x * 5);
console.timeEnd('reduce()');

console.time('for()');
for (let i = 0; i < numeros.length; i++) {
  numeros[i] * 5;
}
console.timeEnd('for()');

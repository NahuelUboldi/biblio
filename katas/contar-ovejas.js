const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]
function containsAnyLetter(str) {
  return /[n]/i.test(str) && /[a]/i.test(str);
}
function contarOvejas(ovejas) {
  return [...ovejas]
  .filter((oveja) => oveja.color === "rojo")
  .filter((oveja) => containsAnyLetter(oveja.name))
}
contarOvejas(ovejas)

function suma(a, b) {
  return a + b
}

let resultado = suma(2, 2)
let esperado = 3

if (resultado !== esperado) {
  console.error('El resultado no fue el esperado')
} else {
  console.log('La prueba paso correctamente')
}
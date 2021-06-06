function suma(a, b) {
  return a + b
}


function expected ( esperado ) {
  return {
    toBe(resultado) {
      if (resultado != esperado) {
        console.error(`El ${resultado} no era el valor esperado`)
      } else{
        console.log('prueba paso correctamente')
      }
    }
  }
}

let resultado = suma(2, 2)
let esperado = 3

expected(resultado).toBe(4)
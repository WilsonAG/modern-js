function suma(a, b) {
  return a + b
}

async function asyncSuma(a, b) {
  return Promise.resolve( suma(a, b) )
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

async function test (mensaje, callback) {
  try {
    await callback()
    console.log(`El test: ${mensaje} se ejecuto correctamente`)
  } catch (error) {
    console.error('Error', error)
  }
}

let resultado = suma(2, 2)
let esperado = 3

expected(resultado).toBe(4)

test('Suma 20 + 10 y debe ser 30', async () => {
  const resultado = await asyncSuma(10, 20);
  expected(resultado).toBe(30)
})
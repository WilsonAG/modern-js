const password = "123456"

describe('Valida que el password no sea vacio y almenos 6 caracteres', () => {
  test('Que tenga 6 caracteres', () => {
    expect( password ).toHaveLength(6)
  })

  test('Passoword no vacio', () => {
    expect(password).not.toHaveLength(0)
  })
})

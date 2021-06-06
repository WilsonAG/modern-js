const cliente = {
  nombre: 'Wilson',
  balance: 600
}

describe('Testing al cliente ', () => {
  test('El cliente es premium', () => {
    expect(cliente.balance).toBeGreaterThan(400)
  })
  
  test('Es wilson?', () => {
    expect(cliente.nombre).toBe('Wilson')
  })

  test('No es otro cliente', () => {
    expect(cliente.nombre).not.toBe('Pedro')
  })

  test('no tiene 500', () => {
    expect(cliente.balance).not.toBe(500)
  })
})

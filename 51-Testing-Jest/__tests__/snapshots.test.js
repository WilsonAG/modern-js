const cliente = {
  nombre: 'Wilson Aguilar',
  balance: 500,
  tipo: 'premium'
}

describe('Testing al cliente', () => {
  test('Es Wilson Aguilar', () => {
    expect(cliente).toMatchSnapshot()
  })
  
})

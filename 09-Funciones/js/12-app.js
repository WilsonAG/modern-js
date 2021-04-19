const carrito = [
  {
    name: 'monitor',
    price: 500,
  },
  {
    name: 'teclado',
    price: 120,
  },
  {
    name: 'mouse',
    price: 25,
  },
  {
    name: 'grafica',
    price: 1200,
  },
];

const nuevo1 = carrito.map(
  (producto) => `${producto.name} - $${producto.price}`
);

carrito.forEach((producto) =>
  console.log(`${producto.name} - $${producto.price}`)
);

console.log(nuevo1);

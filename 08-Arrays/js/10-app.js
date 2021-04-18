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

const nuevo1 = carrito.map(function (producto) {
  return `${producto.name} - $${producto.price}`;
});

const nuevo2 = carrito.forEach(function (producto) {
  return `${producto.name} - $${producto.price}`;
});

console.log(nuevo1);
console.log(nuevo2);

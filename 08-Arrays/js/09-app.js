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

for (let i = 0; i < carrito.length; i++) {
  console.log(`${carrito[i].name} - ${carrito[i].price}`);
}

carrito.forEach(function (producto) {
  console.log(`${producto.name} - $${producto.price}`);
});

carrito.forEach(function ({ name, price }) {
  console.log(`${name} - $${price}`);
});

carrito.forEach(({ name, price }) => console.log(`${name} - $${price}`));

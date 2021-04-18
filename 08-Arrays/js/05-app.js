const carrito = [];

// Definir producto
const producto = {
  name: 'Monitor',
  price: 400,
};

const producto2 = {
  name: 'Celular',
  price: 600,
};

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
  name: 'teclado',
  price: 120,
};

carrito.unshift(producto3);

console.table(carrito);

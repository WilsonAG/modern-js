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
carrito.push(producto);
carrito.push(producto);

const producto3 = {
  name: 'teclado',
  price: 120,
};

carrito.unshift(producto3);
console.table(carrito);

// Delete last element
// carrito.pop();
// console.table(carrito);

// carrito.shift();
// console.table(carrito);

carrito.splice(1, 1);
console.table(carrito);

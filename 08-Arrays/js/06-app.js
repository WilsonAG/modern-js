const carrito = [];

const producto = {
  name: 'Monitor',
  price: 400,
};

const producto2 = {
  name: 'Celular',
  price: 600,
};

const producto3 = {
  name: 'teclado',
  price: 120,
};

let resultado = [...carrito, producto];
resultado = [producto3, ...resultado];

console.table(resultado);

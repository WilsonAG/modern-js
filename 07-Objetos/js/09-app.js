'use strict';

const producto = {
  nombre: 'monitor',
  precio: 300,
  disponible: false,
};

Object.seal(producto);

producto.disponible = true;
// producto.ciudad = 'quito';

console.log(producto);
console.log(Object.isSealed(producto));

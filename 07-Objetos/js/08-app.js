'use strict';

const producto = {
  nombre: 'monitor',
  precio: 300,
  disponible: false,
};

Object.freeze(producto);

// producto.imagen = 'imagen.png';
// producto.disponible = true;

console.log(producto);

console.log(Object.isFrozen(producto));

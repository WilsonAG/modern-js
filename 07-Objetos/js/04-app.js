const producto = {
  nombre: 'monitor',
  precio: 300,
  disponible: false,
};

// const nombre = producto.nombre;

// Object Destructuring
const { nombre, precio } = producto;

console.log(nombre);
console.log(precio);

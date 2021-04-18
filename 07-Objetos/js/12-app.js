// Object literal
const producto = {
  nombre: 'monitor',
  precio: 300,
  disponible: true,
};

// Object construct
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

console.log(producto);

const producto2 = new Producto('Monitor', 250);
console.log(producto2);

console.log(typeof producto2);

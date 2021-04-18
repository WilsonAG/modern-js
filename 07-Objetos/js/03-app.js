const producto = {
  nombre: 'monitor',
  precio: 300,
  disponible: false,
};

// Agregar propiedad
producto.imagen = 'imagen.jpg';

// Eliminar propiedad
delete producto.disponible;

console.log(producto);

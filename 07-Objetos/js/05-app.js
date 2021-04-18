const producto = {
  nombre: 'monitor',
  precio: 300,
  disponible: false,
  informacion: {
    medidas: {
      peso: '1kg',
      medida: '1m',
    },
    fabricacion: {
      pais: 'EC',
    },
  },
};

console.log(producto);

console.log(producto.informacion.fabricacion.pais);

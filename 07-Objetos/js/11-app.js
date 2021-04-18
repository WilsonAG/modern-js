const producto = {
  nombre: 'monitor',
  precio: 300,
  disponible: false,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de ${this.precio}`
    );
  },
};

const producto2 = {
  nombre: 'tablet',
  precio: 3000,
  disponible: false,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de ${this.precio}`
    );
  },
};

producto.mostrarInfo();
producto2.mostrarInfo();

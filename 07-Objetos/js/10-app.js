const producto = {
  nombre: 'monitor',
  precio: 300,
  disponible: false,
};

const medidas = {
  peso: '1kg',
  medida: '1m',
};

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

const resultado2 = { ...producto, ...medidas };

console.log(resultado);

console.log(resultado2);

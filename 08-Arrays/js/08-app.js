const producto = {
  name: 'monitor',
  price: 300,
  available: true,
};

const { name, ...producto2 } = producto;

console.log(producto2);

const numeros = [10, 20, 30, 40];

// const [n1, n2, ...n3] = numeros;
const [, , n3] = numeros;

// console.log(n1);
// console.log(n2);
console.log(n3);

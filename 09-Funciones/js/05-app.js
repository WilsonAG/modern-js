function sumar(a, b) {
  console.log(a + b);
}

sumar(2, 3);

function saludar(name, lastname) {
  console.log(`Hola ${name} ${lastname || ''}`);
}

saludar('wilson', 'Aguilar');
saludar('wilson');

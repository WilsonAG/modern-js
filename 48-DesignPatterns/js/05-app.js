// Module Pattern

// Actual
// const mostrarCliente = (nombre) => {
//   console.log(nombre);
// };

// export default mostrarCliente;

// Antes

const module = (function () {
  const nombre = 'will';

  function mostrarhola() {
    console.log('hola');
  }

  return {
    nombre,
    mostrarhola
  };
})();

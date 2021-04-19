iniciarApp();

function iniciarApp() {
  console.log('Iniciando app...');

  segundaFuncion();
}

function segundaFuncion() {
  console.log('Desde la segunda fn');

  usuarioAutenticado('Will');
}

function usuarioAutenticado(user) {
  console.log('Auntenticando usuario... espere...');
  console.log('Usuario autenticado correctamente.', user);
}

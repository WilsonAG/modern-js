function conectarDB() {
  const abrirConexion = indexedDB.open('crm', 1);

  abrirConexion.onerror = () => console.log('Error al conectar');

  abrirConexion.onsuccess = () => {
    db = abrirConexion.result;
  };
}

function imprimirAlerta(mensaje, tipo) {
  const alerta = document.querySelector('.alerta')
  if (alerta) {
    return
  }


  const div = document.createElement('div');
  div.classList.add(
    'px-4',
    'py-3',
    'rounded',
    'max-w-lg',
    'mx-auto',
    'mt-6',
    'text-center',
    'border',
    'alerta'
  );

  if (tipo === 'error') {
    div.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
  } else {
    div.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
  }

  div.textContent = mensaje

  formulario.appendChild(div)

  setTimeout(() => {
    div.remove()
  }, 3000);
}
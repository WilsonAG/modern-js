(function () {
  const formulario = document.querySelector('#formulario');

  let db;

  document.addEventListener('DOMContentLoaded', () => {
    conectarDB();
  });

  formulario.addEventListener('submit', validarCliente);

  function validarCliente(e) {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    if (nombre === '' || email === '' || telefono === '' || empresa === '') {
      imprimirAlerta('Todos los campos son obligatorios', 'error');
      return;
    }

    const cliente = {
      nombre, email, telefono, empresa, id: Date.now()
    }

    crearCliente(cliente)
  }

  function crearCliente(cliente) {
    const transaction = db.transaction(['crm'], 'readwrite')
    const objStore = transaction.objectStore('crm')

    objStore.add(cliente)

    transaction.onerror = () => imprimirAlerta('Error al crear nuevo cliente', 'error')

    transaction.oncomplete = () => {
      imprimirAlerta('Cliente agregado correctamente')

      setTimeout(() => {
        window.location.href = 'index.html'
      }, 3000);
    }
  }


  
})();

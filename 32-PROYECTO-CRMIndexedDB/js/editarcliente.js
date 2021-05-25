(function () {
  let db;
  let idCliente;
  const nombreInput = document.querySelector('#nombre');
  const emailInput = document.querySelector('#email');
  const telefonoInput = document.querySelector('#telefono');
  const empresaInput = document.querySelector('#empresa');

  const formulario = document.querySelector('#formulario');

  document.addEventListener('DOMContentLoaded', () => {
    conectarDB();
    formulario.addEventListener('submit', actualizarCliente);

    const parametrosURL = new URLSearchParams(window.location.search);

    idCliente = parametrosURL.get('id');

    if (idCliente) {
      setTimeout(() => {
        obtenerCliente(idCliente);
      }, 500);
    }
  });

  function actualizarCliente(e) {
    e.preventDefault();

    if (
      nombreInput.value === '' ||
      emailInput.value === '' ||
      telefonoInput.value === '' ||
      empresaInput.value === ''
    ) {
      imprimirAlerta('Todos los campos son obligatorios', 'error');
      return;
    }

    const clienteActualiazdo = {
      id: +idCliente,
      nombre: nombreInput.value,
      email: emailInput.value,
      empresa: telefonoInput.value,
      telefono: empresaInput.value,
    };

    const transaction = db.transaction(['crm'], 'readwrite');
    const objectStore = transaction.objectStore('crm');

    objectStore.put(clienteActualiazdo);

    transaction.onerror = () => {
      imprimirAlerta('Error al actualizar los datos', 'error');
    };

    transaction.oncomplete = () => {
      imprimirAlerta('Datos actualizados');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 3000);
    };
  }

  function obtenerCliente(id) {
    const transaction = db.transaction(['crm'], 'readonly');
    const objStore = transaction.objectStore('crm');
    const cliente = objStore.openCursor();

    cliente.onsuccess = (e) => {
      const cursor = e.target.result;

      if (cursor) {
        if (cursor.value.id === +id) {
          llenarFormulario(cursor.value);
        }

        cursor.continue();
      }
    };
  }

  function llenarFormulario(cliente) {
    const { nombre, telefono, email, empresa } = cliente;
    nombreInput.value = nombre;
    empresaInput.value = empresa;
    telefonoInput.value = telefono;
    emailInput.value = email;
  }

  function conectarDB() {
    const conexion = indexedDB.open('crm', 1);
    conexion.onerror = () => console.log('Error al conectar a la bd');
    conexion.onsuccess = () => {
      db = conexion.result;
    };
  }
})();

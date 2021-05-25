(function () {

  let db;
  const listadoClientes = document.querySelector('#listado-clientes');

  document.addEventListener('DOMContentLoaded', () => {
    crearDB();
    if (indexedDB.open('crm', 1)) {
      listarClientes();
    }

    listadoClientes.addEventListener('click', eliminarRegistro)
  });

  function eliminarRegistro(e) {
    if (e.target.classList.contains('eliminar')) {
      const idEliminar = +e.target.dataset.cliente
      const confirmar = confirm('¿Deseas eliminar este cliente?')
      if (!confirmar) {
        return
      }

      const transaction = db.transaction('crm', 'readwrite')
      const objStore = transaction.objectStore('crm')

      objStore.delete(idEliminar)

      transaction.oncomplete = () => {
        console.log('Eliminado...')
        e.target.parentElement.parentElement.remove()
      }

      transaction.onerror = () => {
        console.log('error al eliminar')
      }
    }
  }

  function crearDB() {
    const crearDB = indexedDB.open('crm', 1);

    crearDB.onerror = () => console.log('Hubo un error al crear la db');

    crearDB.onsuccess = () => {
      db = crearDB.result;
    };

    crearDB.onupgradeneeded = (e) => {
      const db = e.target.result;

      const objStore = db.createObjectStore('crm', {
        keyPath: 'id',
        autoIncrement: true,
      });

      objStore.createIndex('nombre', 'nombre', { unique: false });
      objStore.createIndex('email', 'email', { unique: true });
      objStore.createIndex('telefono', 'telefono', { unique: false });
      objStore.createIndex('empresa', 'empresa', { unique: false });
      objStore.createIndex('id', 'id', { unique: true });

      console.log('DB lista');
    };
  }

  function listarClientes() {
    const conexion = indexedDB.open('crm', 1);

    conexion.onerror = () => console.log('Hubo un error al crear la db');
    conexion.onsuccess = () => {
      db = conexion.result;

      const objStore = db.transaction('crm').objectStore('crm');

      objStore.openCursor().onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          const { nombre, telefono, empresa, email, id } = cursor.value;

          listadoClientes.innerHTML += ` <tr>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                        <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                        <p class="text-gray-700">${telefono}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                        <p class="text-gray-600">${empresa}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                        <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                        <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                    </td>
                </tr>
            `;

          cursor.continue();
        }
      };
    };
  }
})();

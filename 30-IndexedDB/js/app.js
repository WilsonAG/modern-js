let db;

document.addEventListener('DOMContentLoaded', () =>{
  crmDB()

  setTimeout(() => {
    crearCliente()
  }, 3000);
})

function crearCliente () {
  let transaction = db.transaction(['crm'], 'readwrite')

  transaction.oncomplete = function () {
    console.log('transaccion completada')
  }

  transaction.onerror = function ( ){
    console.log('Error en transaccion')
  }

  const objStore = transaction.objectStore('crm')

  const nuevoCliente = {
    telefono: 0987014414,
    nombre: 'Wilson Aguilar',
    email: 'admin@wilsonaguilar.com'
  }

  const peticion = objStore.add(nuevoCliente)
  console.log(peticion)
}


function crmDB() {
  let crmDB = indexedDB.open('crm', 1)

  crmDB.onerror = function ( ) {
    console.log('Error al crear DB')
  }

  crmDB.onsuccess = function () {
    console.log('BD creada')
    db = crmDB.result
  }

  crmDB.onupgradeneeded = function (e) {
    const db = e.target.result

    const objectStore = db.createObjectStore('crm', {
      keyPath: 'crm',
      autoIncrement: true
    })

    // Definir columnas
    objectStore.createIndex('nombre', 'nombre', { unique: false })
    objectStore.createIndex('email', 'email', { unique: true })
    objectStore.createIndex('telefono', 'telefono', { unique: false })

    console.log('Columnas creadas')

  }
}
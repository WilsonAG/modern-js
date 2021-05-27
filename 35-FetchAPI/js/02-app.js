const cargarJsonBtn = document.querySelector('#cargarJSON')

cargarJsonBtn.addEventListener('click', cargarJSON)

function cargarJSON() {
  const url = 'data/empleado.json'
  fetch(url)
    .then(resp => resp.json())
    .then( mostrarHtml )
    .catch( console.log  )
}


function mostrarHtml ({ empresa, id, nombre, trabajo }) {
  const contenido = document.querySelector('#contenido')
  contenido.innerHTML = `
    <p>Empleado: ${nombre}</p>
    <p>ID: ${id}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
  `
}
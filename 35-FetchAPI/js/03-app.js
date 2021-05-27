const btnArray = document.querySelector('#cargarJSONArray')

btnArray.addEventListener('click', obtenerDatos)

function obtenerDatos() {
  const url = 'data/empleados.json'

  fetch(url)
    .then( resp => resp.json() )
    .then( mostrarEmpleados )
    .catch( console.log )
  
}

function mostrarEmpleados ( data ) {
  const contenido = document.querySelector('#contenido')
  data.forEach(({id, nombre, empresa, trabajo}) => {
    contenido.innerHTML += `
      <p>Empleado: ${nombre}</p>
      <p>ID: ${id}</p>
      <p>Empresa: ${empresa}</p>
      <p>Trabajo: ${trabajo}</p>
    `
  })


}
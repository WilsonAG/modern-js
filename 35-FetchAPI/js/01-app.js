const cargartxtBtn = document.querySelector('#cargarTxt')

cargartxtBtn.addEventListener('click', obtenerDatos)

function obtenerDatos () {
  const url = 'data/datos.txt'
  fetch(url)
    .then(resp => resp.text())
    .then( console.log )
    .catch( console.log )
}
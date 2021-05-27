const apiBtn = document.querySelector('#cargarAPI')

apiBtn.addEventListener('click', obtenerDatos)

function obtenerDatos (  ) {
  const url = 'https://picsum.photos/list#'

  fetch(url)
    .then(resp => resp.json())
    .then( mostrarHtml )
}

function mostrarHtml(datos) {
  const contenido = document.querySelector('.contenido')
  datos.forEach(({author, post_url}) => {
    contenido.innerHTML += `
      <p>Autor: ${author}</p>
      <a href="${post_url}" target="_blank">
        Ver Imagen
      </a>
    `
  })
}
const form = document.querySelector('#formulario')

form.addEventListener('submit', validarForm)

function validarForm(evt) {
  evt.preventDefault()
  console.log(evt)
}
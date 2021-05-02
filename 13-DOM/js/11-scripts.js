const button = document.querySelector('.btn-flotante')
const footer = document.querySelector('.footer')

button.addEventListener('click',showFooter)

function showFooter() {
  if (footer.classList.contains('activo')) {
    footer.classList.remove('activo')
    this.classList.remove('activo')
    this.textContent = 'Idioma y Moneda'
  }else {
    footer.classList.add('activo')
    this.classList.add('activo')
    this.textContent = 'Cerrar'
  }
}
const form = document.querySelector('#cotizar-seguro')

// constructores

function Seguro(marca, year, tipo) {
  this.marca = marca
  this.year = year
  this.tipo = tipo
}

Seguro.prototype.cotizar = function () {
  /**
   * 1 = Americano 1.15
   * 2 = Asiatico 1.05
   * 2 = Europeo 1.35
   */
  let cantidad
  const base = 2000

  switch (+this.marca) {
    case 1:
      cantidad = base * 1.15
      break;
      case 2:
      cantidad = base * 1.05
      break;
    case 3:
      cantidad = base * 1.35
      break;

    default:
      break;
  }

  // Cada año que la diferencia es mayor el costo se reduce en 3%
  const diferencia = new Date().getFullYear() - this.year

  cantidad -= cantidad * 0.03 * diferencia

  /**
   * Si el seguro es basico es un 30% mas
   * Si el seguro es completo es un 50% mas
   */

  this.tipo === 'basico'
  ? cantidad *= 1.3
  : cantidad *= 1.5

  return cantidad

}

function UI() {}

UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear()
  const min = max - 20

  const selectYear = document.querySelector('#year')

  for (let i = max; i > min; i--) {
    let option = document.createElement('option')
    option.value = i
    option.textContent = i
    selectYear.appendChild(option)
  }
}

UI.prototype.mostrarMensaje = (msg, tipo) => {
  const div = document.createElement('div')
  tipo === 'error'
    ? div.classList.add('mensaje', 'error')
    : div.classList.add('mensaje', 'correcto')

  div.classList.add('mt-10')
  div.textContent = msg

  form.insertBefore(div, document.querySelector('#resultado'))

  setTimeout(() => {
    div.remove()
  }, 3000);

}

UI.prototype.mostrarResultado = (seguro, total) => {

  const div = document.createElement('div')
  const marcas = document.querySelectorAll('#marca option')
  const {marca: marcaID, tipo, year} = seguro

  const marcaText = marcas[marcaID].textContent


  div.classList.add('mt-10')

  div.innerHTML = `
    <p class="header">Tu Resumen</p>
    <p class="font-bold">Marca: <span class="font-normal"> ${marcaText}</span></p>
    <p class="font-bold">Año: <span class="font-normal"> ${year}</span></p>
    <p class="font-bold">Tipo: <span class="font-normal capitalize"> ${tipo}</span></p>
    <p class="font-bold">Total: <span class="font-normal">$ ${total}</span></p>
  `

  const resultado = document.querySelector('#resultado')

  while(resultado.firstChild) {
    resultado.removeChild(resultado.firstChild)
  }

  const spinner = document.querySelector('#cargando')
  spinner.style.display = 'block'

  setTimeout(() => {
    spinner.style.display = 'none'
    resultado.appendChild(div)
  }, 3000);
}

const ui = new UI()

document.addEventListener('DOMContentLoaded', () => {
  ui.llenarOpciones()
})

eventListeners()

function eventListeners() {
  form.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro(e) {
  e.preventDefault()

  const marca = document.querySelector('#marca').value
  const year = document.querySelector('#year').value
  const tipo = document.querySelector('input[name="tipo"]:checked').value

  if (!marca || !year || !tipo) {
    ui.mostrarMensaje('Todos los campos son obligatorios', 'error')
    return
  }

  ui.mostrarMensaje('Cotizando...', 'exito')

  const seguro = new Seguro(marca, year, tipo)

  const total = seguro.cotizar()

  ui.mostrarResultado(seguro, total)

}
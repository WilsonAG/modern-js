const form = document.querySelector('#agregar-gasto')
const gastoLista = document.querySelector('#gastos ul')


eventListeners()

function eventListeners() {
  document.addEventListener('DOMContentLoaded', preguntarPresupuesto)
  form.addEventListener('submit', agregarGasto)
}

class Presupuesto {

  constructor (presupuesto) {
    this.presupuesto = +presupuesto
    this.restante = +presupuesto
    this.gastos = []
  }

  nuevoGasto( gasto ) {
    this.gastos = [...this.gastos, gasto]
    this.calcularRestante()
  }

  calcularRestante () {
    const gastado = this.gastos
                            .reduce((total, gasto) => total + gasto.cantidad ,0)
    this.restante = this.presupuesto - gastado
  }

  eliminarGasto (id) {
    this.gastos = this.gastos.filter(gasto => gasto.id !== id)
    this.calcularRestante()
  }
}

class UI {

  insertarPresupuesto( cantidad ) {
    const {presupuesto, restante} = cantidad
    document.querySelector('#total').textContent = presupuesto
    document.querySelector('#restante').textContent = restante

  }

  imprimirAlerta(message, tipo) {
    const divMsg = document.createElement('div')
    divMsg.classList.add('text-center', 'alert')
    if (tipo === 'error') {
      divMsg.classList.add('alert-danger')
    } else {
      divMsg.classList.add('alert-success')
    }

    divMsg.textContent = message

    document.querySelector('.primario').insertBefore(divMsg, form)

    setTimeout(() => {
      divMsg.remove()
    }, 2000);
  }

  mostrarGastos (gastos) {
    this.limpiarHTML()
    gastos.forEach(({cantidad, nombre, id}) => {
      const li = document.createElement('li')

      li.className = 'list-group-item d-flex justify-content-between align-items-center'
      // li.setAttribute('data-id', id)
      li.dataset.id = id

      li.innerHTML = `
        ${nombre} <span class="badge badge-primary badge-pill"> ${cantidad} </span>
      `

      const btnBorrar = document.createElement('btn')
      btnBorrar.innerHTML = '&times'
      btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto')

      btnBorrar.onclick = () => {
        eliminarGasto(id)
      }

      li.appendChild(btnBorrar)

      gastoLista.appendChild(li)
    })
  }

  actualizarRestante (restante) {
    document.querySelector('#restante').textContent = restante
  }

  comprobarPresupuesto (presupuestoObj) {
    const {presupuesto, restante} = presupuestoObj
    const restanteDiv = document.querySelector('.restante')

    if (presupuesto * 0.25 > restante) {
      restanteDiv.classList.remove('alert-success', 'alert-warning')
      restanteDiv.classList.add('alert-danger')
    } else if (presupuesto * 0.5 > restante) {
      restanteDiv.classList.remove('alert-success')
      restanteDiv.classList.add('alert-warning')
    } else {
      restanteDiv.classList.remove('alert-warning', 'alert-danger')
      restanteDiv.classList.add('alert-success')
    }

    if (restante < 0) {
      ui.imprimirAlerta('Se ha agotado el presupuesto', 'error')
      form.querySelector('button[type="submit"]').disabled = true
    }

  }

  limpiarHTML () {
    while (gastoLista.firstChild) {
      gastoLista.removeChild(gastoLista.firstChild)
    }
  }
}

let presupuesto

const ui = new UI()


function preguntarPresupuesto() {
  // const presupuestoUser = parseFloat(prompt('¿Cual es tu presupuesto?'))
  const presupuestoUser = 500

  if (!presupuestoUser || presupuestoUser === '' || presupuestoUser <= 0 ) {
    window.location.reload()
  }

  presupuesto = new Presupuesto(presupuestoUser)

  ui.insertarPresupuesto(presupuesto)
}

function agregarGasto(e) {
  e.preventDefault()

  const nombre = document.querySelector('#gasto').value
  const cantidad = +document.querySelector('#cantidad').value

  if (cantidad === '' || nombre === '') {
    ui.imprimirAlerta('Ambos campos son obligatorios', 'error')
    return
  }

  if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta('Cantidad no valida', 'error')
  }

  const gasto = { nombre, cantidad, id: Date.now() }

  presupuesto.nuevoGasto( gasto )

  ui.imprimirAlerta('Gasto agregado correctamente')

  const { gastos, restante } = presupuesto

  ui.mostrarGastos(gastos)

  ui.comprobarPresupuesto(presupuesto)

  ui.actualizarRestante(restante)

  form.reset()
}

function eliminarGasto(id) {
  presupuesto.eliminarGasto(id)
  ui.mostrarGastos(presupuesto.gastos)
  ui.actualizarRestante(presupuesto.restante)
  ui.comprobarPresupuesto(presupuesto)
}
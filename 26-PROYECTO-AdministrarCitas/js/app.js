const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const form = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando

class Citas {
  constructor() {
    this.citas = JSON.parse(localStorage.getItem('citas')) || [];
  }

  agregarCita(cita) {
    this.citas = [...this.citas, cita];
    localStorage.setItem('citas', JSON.stringify(this.citas))
  }

  eliminarCita(id) {
    this.citas = this.citas.filter(cita => cita.id !== id )
    localStorage.setItem('citas', JSON.stringify(this.citas))
  }

  editarCita(citaActualizada) {
    this.citas = this.citas.map(cita => {
      if (cita.id === citaActualizada.id) {
        return citaActualizada
      }

      return cita
    })

    localStorage.setItem('citas', JSON.stringify(this.citas))
  }
}

class UI {

  imprimirAlerta(msg, tipo) {
    const divMsg = document.createElement('div');
    divMsg.classList.add('text-center', 'alert', 'd-block', 'col-12');

    divMsg.classList.add(tipo === 'error' ? 'alert-danger' : 'alert-success');

    divMsg.textContent = msg;

    document
      .querySelector('#contenido')
      .insertBefore(divMsg, document.querySelector('.agregar-cita'));

    setTimeout(() => {
      divMsg.remove();
    }, 3000);
  }

  imprimirCitas({ citas }) {
    this.limpiarHTML()

    citas.forEach(
      ({ id, mascota, propietario, telefono, fecha, hora, sintomas }) => {
        const divCita = document.createElement('div')
        divCita.classList.add('cita', 'p-3')
        divCita.dataset.id = id

        const mascotaParrafo = document.createElement('h2')
        mascotaParrafo.classList.add('card-title', 'font-weight-bolder')
        mascotaParrafo.textContent = mascota

        const propietarioParrafo = document.createElement('p')
        propietarioParrafo.innerHTML = `
          <span class="font-weight-bolder">Propietario: </span> ${propietario}
        `

        const telefonoParrafo = document.createElement('p')
        telefonoParrafo.innerHTML = `
          <span class="font-weight-bolder">Telefono: </span> ${telefono}
        `

        const fechaParrafo = document.createElement('p')
        fechaParrafo.innerHTML = `
          <span class="font-weight-bolder">fecha: </span> ${fecha}
        `

        const horaParrafo = document.createElement('p')
        horaParrafo.innerHTML = `
          <span class="font-weight-bolder">hora: </span> ${hora}
        `

        const sintomaParrafo = document.createElement('p')
        sintomaParrafo.innerHTML = `
          <span class="font-weight-bolder">sintoma: </span> ${sintomas}
        `

        const btnEliminar = document.createElement('button')
        btnEliminar.classList.add('btn', 'btn-danger', 'mr-2')
        btnEliminar.innerHTML = 'Eliminar'

        btnEliminar.onclick = () => eliminarCita(id)

        const btnEditar = document.createElement('button')
        btnEditar.classList.add('btn', 'btn-info', 'mr-2')
        btnEditar.innerHTML = 'Editar'

        btnEditar.onclick = () => cargarEdicion(id)


        divCita.appendChild(mascotaParrafo)
        divCita.appendChild(propietarioParrafo)
        divCita.appendChild(telefonoParrafo)
        divCita.appendChild(fechaParrafo)
        divCita.appendChild(horaParrafo)
        divCita.appendChild(sintomaParrafo)
        divCita.appendChild(btnEliminar)
        divCita.appendChild(btnEditar)


        contenedorCitas.appendChild(divCita)
      }
    );
  }

  limpiarHTML() {
    while(contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild)
    }
  }
}

const ui = new UI();

const administraCitas = new Citas();

ui.imprimirCitas(administraCitas)

eventListeners();
function eventListeners() {
  mascotaInput.addEventListener('input', datosCita);
  propietarioInput.addEventListener('input', datosCita);
  telefonoInput.addEventListener('input', datosCita);
  fechaInput.addEventListener('input', datosCita);
  horaInput.addEventListener('input', datosCita);
  sintomasInput.addEventListener('input', datosCita);

  form.addEventListener('submit', nuevaCita);
}

let citaObj = {
  mascota: '',
  propietario: '',
  telefono: '',
  fecha: '',
  hora: '',
  sintomas: '',
};

function datosCita(e) {
  const { name, value } = e.target;
  citaObj[name] = value;
}

function nuevaCita(e) {
  e.preventDefault();

  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

  if (
    mascota === '' ||
    propietario === '' ||
    telefono === '' ||
    fecha === '' ||
    hora === '' ||
    sintomas === ''
  ) {
    ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
    return;
  }

  if(editando) {
    administraCitas.editarCita({...citaObj})

    ui.imprimirAlerta('Editado correctamente')

    form.querySelector('button[type="submit"]').textContent = 'Crear cita'

    editando = false
  } else {
    citaObj.id = Date.now();
    administraCitas.agregarCita({ ...citaObj });

    ui.imprimirAlerta('Se agrego correctamente')
  }


  form.reset();
  reiniciarObjeto();

  ui.imprimirCitas(administraCitas);
}

function reiniciarObjeto() {
  for (const prop in citaObj) {
    if (Object.hasOwnProperty.call(citaObj, prop)) {
      citaObj[prop] = '';
    }
  }
}


function eliminarCita(id) {
  administraCitas.eliminarCita(id)

  ui.imprimirAlerta('La cita se elimino correctamente')

  ui.imprimirCitas(administraCitas)
}

function cargarEdicion(id) {
  const cita = administraCitas.citas.find(cita => cita.id === id)
  const {mascota, propietario, telefono, fecha, hora, sintomas } = cita
  mascotaInput.value = mascota
  propietarioInput.value = propietario
  telefonoInput.value = telefono
  fechaInput.value = fecha
  horaInput.value = hora
  sintomasInput.value = sintomas

  citaObj = cita

  form.querySelector('button[type="submit"]').textContent = 'Guardar Cambios'

  editando = true
}
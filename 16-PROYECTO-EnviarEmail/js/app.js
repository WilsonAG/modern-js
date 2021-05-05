const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const form = document.querySelector('#enviar-mail');

eventListeners();

function eventListeners() {
  document.addEventListener('DOMContentLoaded', initApp);
  email.addEventListener('blur', validarForm);
  asunto.addEventListener('blur', validarForm);
  mensaje.addEventListener('blur', validarForm);
  btnReset.addEventListener('blur', resetForm);
}

function initApp() {
  btnEnviar.disabled = true;
  btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');

  form.addEventListener('submit', sendEmail);
}

function validarForm(e) {
  if (e.target.value.length > 0) {
    // Elimina erroes
    const error = document.querySelector('p.error');
    error && error.remove();

    e.target.classList.remove('border', 'border-red-500');
    e.target.classList.add('border', 'border-green-500');
  } else {
    e.target.classList.remove('border', 'border-green-500');
    e.target.classList.add('border', 'border-red-500');
    mostrarError('Los campos son obligatorios');
  }

  const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (e.target.type === 'email') {
    if (er.test(e.target.value)) {
      const error = document.querySelector('p.error');
      error && error.remove();

      e.target.classList.remove('border', 'border-red-500');
      e.target.classList.add('border', 'border-green-500');
    } else {
      e.target.classList.remove('border', 'border-green-500');
      e.target.classList.add('border', 'border-red-500');
      mostrarError('Email no valido');
    }
  }

  if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
  }
}

function mostrarError(msg) {
  const msgError = document.createElement('p');
  msgError.textContent = msg;
  msgError.classList.add(
    'border',
    'border-red-500',
    'background-red-100',
    'text-red-500',
    'p-3',
    'mt-5',
    'text-center',
    'error'
  );

  const errores = document.querySelectorAll('.error');

  if (errores.length === 0) {
    form.appendChild(msgError);
  }
}

function sendEmail(e) {
  e.preventDefault();

  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'flex';

  setTimeout(() => {
    spinner.style.display = 'none';

    const parrafo = document.createElement('p')
    parrafo.textContent = 'El mensaje se envio correctamente'
    parrafo.classList.add('center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'text-center','font-bold', 'uppercase')
    form.insertBefore(parrafo, spinner)

    setTimeout(() => {
      parrafo.remove()
      resetForm()
    }, 5000);
  }, 3000);
}

function resetForm() {
  form.reset()
  initApp()
}

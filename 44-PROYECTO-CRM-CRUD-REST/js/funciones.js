export function mostrarAlerta(mensaje) {
  const alerta = document.querySelector('#alerta')

  if (alerta) return

  const newAlerta = document.createElement('div')

  newAlerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'mas-w-lg', 'mx-auto', 'mt-6', 'text-center')
  newAlerta.id = 'alerta'
  newAlerta.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block sm:inline">${mensaje}</span>
  `

  const formulario = document.querySelector('#formulario')
  formulario.appendChild(newAlerta)

  setTimeout(() => {
    newAlerta.remove()
  }, 2000);
}

export function validar(obj) {
  return Object.values(obj).every(prop => prop !== '')
}
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('online', () => {
    console.log(navigator.onLine)
    console.log('dasd')

  })
  
  window.addEventListener('offline', actualizarEstado)
})


function actualizarEstado() {
  console.log('object')
  if (navigator.onLine) {
    console.log('estas conectado')
  } else {
    console.log('no estas conectado')
  }
}
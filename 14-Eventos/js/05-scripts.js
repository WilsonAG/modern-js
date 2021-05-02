window.addEventListener('scroll', (e) => {
  const premium = document.querySelector('.premium')

  const ubicacion = premium.getBoundingClientRect()

  if (ubicacion.top < 784) {
    console.log('elemento visible')
  } else {
    console.log('Elemento aun no visible')
  }
})
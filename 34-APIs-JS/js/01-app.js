const notificarBtn = document.querySelector('#notificar')

notificar.addEventListener('click', () => {
  Notification
    .requestPermission()
    .then(resultado => {
      console.log('el resultado es', resultado)
    })
})

const verNotificacion = document.querySelector('#verNotificacion')
verNotificacion.addEventListener('click', () => {
  if (Notification.permission === 'granted') {
    const notificacion = new Notification('Notificacion', {
      icon: 'img/ccj.png',
      body: 'Body de la notificacion',
      image: 'img/ccj.png'
    })

    notificacion.addEventListener('click', () => {
      window.open('https://wilsonaguilar.com')
    })
  }
})
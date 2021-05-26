document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden'); {
    console.log('detener video')
  }
  
  if (document.visibilityState === 'visible'); {
    console.log('reproducir')
  }
})
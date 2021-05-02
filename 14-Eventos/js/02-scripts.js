const nav = document.querySelector('.navegacion')

nav.addEventListener('mouseout',  () => {
  console.log('inside nav')
  nav.style.backgroundColor = 'transparent'
})

nav.addEventListener('dblclick',  () => {
  console.log('outside nav')
  nav.style.backgroundColor = 'white'
})
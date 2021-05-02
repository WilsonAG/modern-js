
const card = document.querySelector('.card')
const info = document.querySelector('.info')
const titulo = document.querySelector('.titulo')


card.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log('click en card')
})

info.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log('click en info')
})

titulo.addEventListener('click', (e) => {
  e.stopPropagation()
  console.log('click en titulo')
})

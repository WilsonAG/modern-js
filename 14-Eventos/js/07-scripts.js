const card = document.querySelector('.card')

card.addEventListener('click', (e) => {
  
  if (e.target.classList.contains('titulo')) {
    console.log('titulo')
  }
  if (e.target.classList.contains('precio')) {
    console.log('precio')
  }
  if (e.target.classList.contains('card')) {
    console.log('card')
  }
})
const link = document.createElement('a')

link.textContent = 'New Link'
link.href =  '/new-link'

const nav = document.querySelector('.navegacion')
nav.insertBefore(link, nav.children[1])


// Add new Card
const paragraph1 = document.createElement('p')
paragraph1.textContent = 'concierto'
paragraph1.classList.add('categoria', 'concierto')

const paragraph2 = document.createElement('p')
paragraph2.textContent = 'New Concert'
paragraph2.classList.add('titulo')

const paragraph3 = document.createElement('p')
paragraph3.textContent = '$ 20 x cabeza'
paragraph3.classList.add('precio')

const info = document.createElement('div')
info.classList.add('info')

info.appendChild(paragraph1)
info.appendChild(paragraph2)
info.appendChild(paragraph3)

const img = document.createElement('img')
img.src = 'img/newyork1.jpg'

const card = document.createElement('div')
card.classList.add('card')

card.appendChild(img)
card.appendChild(info)

const container = document.querySelector('.hacer .contenedor-cards')
container.appendChild(card)
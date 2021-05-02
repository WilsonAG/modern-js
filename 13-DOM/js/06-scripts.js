const encabezado = document.querySelector('.contenido-hero h1')

console.log(encabezado.innerText)
console.log(encabezado.textContent)
console.log(encabezado.innerHTML)


encabezado.textContent = 'New Heading'

const image = document.querySelector('.card img')

console.log(image)

image.src = 'img/hacer2.jpg'
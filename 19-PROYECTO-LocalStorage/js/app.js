const form = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets')

let tweets = []


eventListeners()


function eventListeners() {

  form.addEventListener('submit', agregarTweet)

  document.addEventListener('DOMContentLoaded', () => {
    tweets = JSON.parse(localStorage.getItem('tweets'))|| []
    crearHtml()
  })
}


function agregarTweet(e) {
  e.preventDefault();

  const tweet = document.querySelector('#tweet').value

  if (tweet.trim() === '') {
    mostrarError('No puede ir vacio')
    return
  }

  const tweetObj = {
    id: Date.now(),
    tweet
  }

  tweets = [...tweets, tweetObj]
  crearHtml();


  form.reset()
}


function mostrarError(mensaje) {
  const parrafo = document.createElement('p')
  parrafo.textContent = mensaje
  parrafo.classList.add('error')

  const contenido = document.querySelector('#contenido')
  contenido.appendChild(parrafo)

  setTimeout(() => {
    parrafo.remove()
  }, 3000);
}

function crearHtml() {
  if (tweets.length === 0) {
    return
  }

  limpiarHtml()

  tweets.forEach(tweet => {
    const li = document.createElement('li')
    const btnEliminar = document.createElement('a')

    btnEliminar.classList.add('borrar-tweet')
    btnEliminar.innerText = 'X'

    btnEliminar.onclick = () => {
      borrarTweet(tweet.id)
    }

    li.innerText = tweet.tweet
    li.appendChild(btnEliminar)

    listaTweets.appendChild(li)
  })

  sincronizarStorage();
}

function borrarTweet(id) {
  tweets = tweets.filter(tweet => tweet.id !== id)
  crearHtml()
}

function limpiarHtml () {
  while(listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild)
  }
}

function sincronizarStorage() {
  localStorage.setItem('tweets', JSON.stringify(tweets))
}
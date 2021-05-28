import * as UI from './interfaz.js'

export default class API {

  constructor ( artista, cancion ) {
    this.artista = artista
    this.cancion = cancion
    
  }

  consultarAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`

    fetch(url)
      .then(resp => resp.json())
      .then(resultado => {
        const { lyrics } = resultado

        if (!lyrics) {
          UI.divMensajes.textContent = 'La cancion no existe, prueba con otra.'
          UI.divMensajes.classList.add('error')

          setTimeout(() => {
            UI.divMensajes.textContent = ''
          UI.divMensajes.classList.remove('error')
          }, 3000);
        }

        UI.divResultado.textContent = lyrics
        UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} - ${this.artista}`
      })
  }
}
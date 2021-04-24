const reproductor = {
  cancion: '',
  reproducir: (id) => console.log('reproduciendo cancion con el id', id),
  pausar: () => console.log('pausando...'),
  borrar: () => console.log('borrando cancion'),
  crearPlayList: (name) => console.log('Creando la playlist', name),
  reproducirPlaylist: (name) => console.log('reproduciendo playlist', name),
  /**
   * @param {string} cancion
   */
  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log('añadiendo', cancion);
  },
  get obtenerCancion() {
    console.log(this.cancion);
  },
};

reproductor.reproducir(30);
reproductor.pausar();

reproductor.borrar();

reproductor.crearPlayList('rock');
reproductor.reproducirPlaylist('rock');

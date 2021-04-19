const reproductor = {
  reproducir: function (id) {
    console.log('reproduciendo cancion con el id', id);
  },
  pausar: function () {
    console.log('pausando...');
  },
  borrar: function () {
    console.log('borrando cancion');
  },
  crearPlayList: function (name) {
    console.log('Creando la playlist', name);
  },
  reproducirPlaylist: function (name) {
    console.log('reproduciendo playlist', name);
  },
};

reproductor.reproducir(30);
reproductor.pausar();

reproductor.borrar();

reproductor.crearPlayList('rock');
reproductor.reproducirPlaylist('rock');

const salida = document.querySelector('#salida');
const microfonoBtn = document.querySelector('#microfono');

microfonoBtn.addEventListener('click', ejecutarSpeechApi);

function ejecutarSpeechApi() {
  const SpeechRecognition = webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.start();

  recognition.onstart = () => {
    salida.classList.add('mostrar');
    salida.textContent = 'Escuchando...';
  };

  recognition.onspeechend = () => {
    salida.textContent = 'Se dejo de grabar';
    recognition.stop();
  };

  recognition.onresult = (e) => {
    const {confidence, transcript} = e.results[0][0];

    const speech = document.createElement('p')
    speech.innerHTML = `Grabando: ${transcript}`
    
    const seguridad = document.createElement('p')
    seguridad.innerHTML = `Seguridad: ${confidence * 100}`

    salida.appendChild(speech)
    salida.appendChild(seguridad)

  };
}

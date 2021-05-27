const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
  formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  const ciudad = document.querySelector('#ciudad').value;
  const pais = document.querySelector('#pais').value;

  if (ciudad === '' || pais === '') {
    return mostrarError('Los campos son obligatorios');
  }

  consultarAPI(ciudad, pais)
}

function consultarAPI(ciudad, pais) {
  const appID = 'b8801da2bd784eed38e5712225c85aa3'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},,${pais}&appid=${appID}`

  spinner()

  fetch(url)
    .then( resp => resp.json() )
    .then( data => {
      limpiarHTML()
      if (data.cod === '404') {
        mostrarError('Ciudadno no encontrada')
        return
      }

      mostrarClima(data)
    })
}

function mostrarClima( datos ) {
  const { name, main: { temp, temp_max, temp_min } } = datos

  const centigrados = kelvin2Centigrados(temp)
  const max = kelvin2Centigrados(temp_max)
  const min = kelvin2Centigrados(temp_min)

  const actual = document.createElement('p')

  actual.innerHTML = `${centigrados} &#8451;`
  actual.classList.add('font-bold', 'text-6xl')

  const tempMax = document.createElement('p')
  tempMax.innerHTML = `Max: ${max} &#8451;`
  tempMax.classList.add('font-bold', 'text-xl')

  const tempMin = document.createElement('p')
  tempMin.innerHTML = `Min: ${min} &#8451;`
  tempMin.classList.add('font-bold', 'text-xl')

  const resultadoDiv = document.createElement('div')
  resultadoDiv.classList.add('text-center', 'text-white')

  const nombreCiudad = document.createElement('p')
  nombreCiudad.textContent = `Clima en ${name}`
  nombreCiudad.classList.add('font-bold', 'text-2xl')

  resultadoDiv.appendChild(nombreCiudad)
  resultadoDiv.appendChild(actual)
  resultadoDiv.appendChild(tempMax)
  resultadoDiv.appendChild(tempMin)

  resultado.appendChild(resultadoDiv)
}

const kelvin2Centigrados = gradosKelvin => parseInt(gradosKelvin - 273.15)

function limpiarHTML ( ) {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild)
  }
}

function mostrarError(mensaje) {
  const alerta = document.querySelector('#alerta');

  if (!alerta) {
    const alerta = document.createElement('div');
    alerta.id = 'alerta';
    alerta.classList.add(
      'bg-red-100',
      'border',
      'border-red-400',
      'text-red-700',
      'px-4',
      'py-3',
      'rounded',
      'max-w-md',
      'mx-auto',
      'mt-6',
      'text-center'
    );

    alerta.innerHTML = `
      <strong class="font-bold"> Error </strong>
      <span class="block"> ${mensaje} </span>
    `;

    container.append(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function spinner () {
  limpiarHTML()
  const divSpinner = document.createElement('div')
  divSpinner.classList.add('sk-fading-circle')

  divSpinner.innerHTML = `
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
  `

  resultado.appendChild(divSpinner)
}
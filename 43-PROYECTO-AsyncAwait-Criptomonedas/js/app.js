const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
  moneda: '',
  criptomoneda: '',
};

const obtenerCriptomonedas = (criptomonedas) =>
  new Promise((resolve) => {
    resolve(criptomonedas);
  });

document.addEventListener('DOMContentLoaded', () => {
  consultarCriptomonedas();

  formulario.addEventListener('submit', submitFormulario);

  criptomonedasSelect.addEventListener('change', leerValor);
  monedaSelect.addEventListener('change', leerValor);
});

function submitFormulario(e) {
  e.preventDefault();

  const { moneda, criptomoneda } = objBusqueda;

  if (moneda === '' || criptomoneda === '') {
    mostrarAlerta('Ambos campos son obligatorios');
    return;
  }

  consultarAPI();
}

async function consultarAPI() {
  const { criptomoneda, moneda } = objBusqueda;
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  mostrarSpinner();
  const resp = await fetch(url);
  const result = await resp.json();

  mostrarCotizacionHTML(result.DISPLAY[criptomoneda][moneda]);
}

function mostrarCotizacionHTML(cotizacion) {
  limpiarHTML();

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

  const precio = document.createElement('p');
  precio.classList.add('precio');
  precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

  const precioAlto = document.createElement('p');
  precioAlto.innerHTML = `Precio mas alto del dia : <span>${HIGHDAY}</span>`;

  const precioBajo = document.createElement('p');
  precioBajo.innerHTML = `Precio mas bajo del dia : <span>${LOWDAY}</span>`;

  const ultimasHoras = document.createElement('p');
  ultimasHoras.innerHTML = `Variacion ultimas horas : <span>${CHANGEPCT24HOUR}%</span>`;

  const ultimaActualizacion = document.createElement('p');
  ultimaActualizacion.innerHTML = `Ultima actualizacion : <span>${LASTUPDATE}</span>`;

  resultado.appendChild(precio);
  resultado.appendChild(precioAlto);
  resultado.appendChild(precioBajo);
  resultado.appendChild(ultimasHoras);
  resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function mostrarAlerta(msg) {
  const isError = document.querySelector('.error');
  if (isError) return;
  const div = document.createElement('div');
  div.classList.add('error');

  div.textContent = msg;

  formulario.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 2000);
}

function leerValor(e) {
  objBusqueda[e.target.name] = e.target.value;

  console.log(objBusqueda);
}

async function consultarCriptomonedas() {
  const url =
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

  const resp = await fetch(url);
  const res = await resp.json();
  const cripto = await obtenerCriptomonedas(res.Data);

  selectCriptomonedas(cripto);
}

function selectCriptomonedas(criptomonedas) {
  criptomonedas.forEach((cripto) => {
    const { FullName, Name } = cripto.CoinInfo;

    const option = document.createElement('option');

    option.value = Name;
    option.textContent = FullName;

    criptomonedasSelect.appendChild(option);
  });
}

function mostrarSpinner() {
  limpiarHTML();
  const spinner = document.createElement('div');

  spinner.classList.add('spinner');

  spinner.innerHTML = `
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  `;

  resultado.append(spinner);
}

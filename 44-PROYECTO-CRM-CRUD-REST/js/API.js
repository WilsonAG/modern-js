const url = 'http://localhost:4000/clientes';

export const nuevoCliente = async (cliente) => {
  try {
    await fetch(url, {
      method: 'post',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    window.location.href = 'index.html';
  } catch (error) {
    console.log(error);
  }
};

export const obtenerClientes = async () => {
  try {
    const resp = await fetch(url);
    const resultado = await resp.json();

    return resultado;
  } catch (error) {
    console.log(error);
  }
};

export const eliminarCliente = async(id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: 'delete',
    })

    window.location.href = 'index.html'
  } catch (error) {
    console.log(error)
  }
}

export const obtenerCliente = async id => {
  try {
    const resultado = await fetch(`${url}/${id}`)

    const cliente = await resultado.json()

    return cliente
  } catch (error) {
    console.log(error)
  }
}

export const actualizarCliente = async cliente => {
  try {
    const { id } = cliente
    await fetch(`${url}/${id}`, {
      method: 'put',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    location.href = 'index.html'
  } catch (error) {
    console.log(error)
  }
}

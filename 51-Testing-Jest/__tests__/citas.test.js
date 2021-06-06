import Citas from '../js/classes/Citas';

describe('Probar clase de citas', () => {
  const citas = new Citas();
  const id = Date.now()

  test('Agregar una nueva cita', () => {
    const citaObj = {
      id,
      mascota: 'Connie',
      propietario: 'Andrea',
      telefono: '2692458',
      fecha: '06-06-2021',
      hora: '10:30',
      sintomas: 'Solo duerme',
    };

    citas.agregarCita(citaObj)

    expect(citas).toMatchSnapshot()
  });

  test('Actualizar cita', () => {
    const citaActualizada = {
      id,
      mascota: 'Connie Actualizado',
      propietario: 'Andrea',
      telefono: '2692458',
      fecha: '06-06-2021',
      hora: '10:30',
      sintomas: 'Solo duerme',
    };

    citas.editarCita(citaActualizada)

    expect(citas).toMatchSnapshot()
  })

  test('Eliminar cita', () => {
    citas.eliminarCita(id)

    expect(citas).toMatchSnapshot()
  })

});

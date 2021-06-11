import { request, response } from 'express';
import { Testimonio } from '../models/Testimonio.js';

export const guardarTestimonio = async (req = request, res = response) => {
  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === '') {
    errores.push({ mensaje: 'Nombre vacio' });
  }
  if (correo.trim() === '') {
    errores.push({ mensaje: 'Correo vacio' });
  }
  if (mensaje.trim() === '') {
    errores.push({ mensaje: 'Mensaje vacio' });
  }

  if (errores.length > 0) {
    const testimonios = await Testimonio.findAll();
    return res.render('testimonios', {
      pagina: 'Testimonios',
      errores,
      campos: { nombre, correo, mensaje},
      testimonios
    });
  }

  await Testimonio.create({ nombre, correo, mensaje });

  res.redirect('/testimonios');
  try {
  } catch (error) {
    console.log(error);
  }
};

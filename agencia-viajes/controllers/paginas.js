import { request, response } from 'express';
import { Viaje } from '../models/Viaje.js';
import { Testimonio } from '../models/Testimonio.js';

export const paginaInicio = async (req = request, res = response) => {
  // Consultar 3 viajes

  try {
    const [viajes, testimonios] = await Promise.all([
      Viaje.findAll({ limit: 3 }),
      Testimonio.findAll({ limit: 3 }),
    ]);

    res.render('inicio', {
      pagina: 'Inicio',
      clase: 'home',
      viajes,
      testimonios,
    });
  } catch (error) {
    console.log(error);
  }
};

export const paginaNosotros = (req = request, res = response) => {
  res.render('nosotros', {
    pagina: 'Nosotros',
  });
};

export const paginaViajes = async (req = request, res = response) => {
  // Consultar bd
  try {
    const viajes = await Viaje.findAll();
    res.render('viajes', {
      pagina: 'Proximos viajes',
      viajes,
    });
  } catch (error) {
    console.log(error);
    res.render('viajes', {
      pagina: 'Viajes',
    });
  }
};

export const paginaDetalleViaje = async (req = request, res = response) => {
  const { slug } = req.params;
  try {
    const resultado = await Viaje.findOne({ where: { slug } });
    res.render('viaje', {
      pagina: 'Informacion Viaje',
      viaje: resultado,
    });
  } catch (error) {
    console.log(error);
  }
};

export const paginaTestimonios = async (req = request, res = response) => {
  try {
    const testimonios = await Testimonio.findAll();

    res.render('testimonios', {
      pagina: 'Testimonios',
      testimonios,
    });
  } catch (error) {
    console.log(error);
  }
};

export const paginaContacto = (req = request, res = response) => {
  res.send('contacto');
};

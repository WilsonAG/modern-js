import { Router } from 'express';
import {
  paginaContacto,
  paginaDetalleViaje,
  paginaInicio,
  paginaNosotros,
  paginaTestimonios,
  paginaViajes,
} from '../controllers/paginas.js';
import { guardarTestimonio } from '../controllers/testimonioController.js';

const router = Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimonios', paginaTestimonios);

router.post('/testimonios', guardarTestimonio);

router.get('/contacto', paginaContacto);

export default router;

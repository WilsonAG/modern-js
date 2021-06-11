import Sequelize from 'sequelize';
import db from '../config/db.js';


export const Testimonio = db.define('testimonios', {
  nombre: {
    type: Sequelize.DataTypes.STRING
  },
  correo: {
    type: Sequelize.DataTypes.STRING
  },
  mensaje: {
    type: Sequelize.DataTypes.STRING,
  },
})
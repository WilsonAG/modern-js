import Sequelize from 'sequelize';
import db from '../config/db.js';


export const Viaje = db.define('viajes', {
  titulo: {
    type: Sequelize.DataTypes.STRING
  },
  precio: {
    type: Sequelize.DataTypes.STRING
  },
  fecha_ida: {
    type: Sequelize.DataTypes.DATE,
  },
  fecha_vuelta: {
    type: Sequelize.DataTypes.DATE,
  },
  imagen: {
    type: Sequelize.DataTypes.STRING,
  },
  descripcion: {
    type: Sequelize.DataTypes.STRING,
  },
  disponibles: {
    type: Sequelize.DataTypes.STRING,
  },
  slug: {
    type: Sequelize.DataTypes.STRING,
  },
})
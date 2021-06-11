// const express = require('express');
import express from "express";
import router from './routes/index.js';
import db from './config/db.js';

const app = express();
const port = process.env.PORT || 4000;
const host = process.env.HOST || '127.0.0.1'

// Connect database
db.authenticate()
  .then(() => console.log('Database lista'))
  .catch(() => console.log('Error al conectar a la base de datos'))

app.set('view engine', 'pug')

app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
  res.locals.year = new Date().getFullYear()
  res.locals.sitio = 'Agencia de viajes'
  next()
})

app.use(express.static('public'))

app.use('/', router)

app.listen( port, host, () => {
  console.log(`Servidor funcionando en el puerto ${port}`)
})
'use strict'

const express = require('express');
const app = express(); // Importando y ejecutando express
const bodyParser = require('body-parser');
const db = require('./db.js');
const port = 3000; // Definiendo puerto

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug'); //Indicando que usaremos template engine Pug

const mainRoutes = require('./routes'); //Definiendo main router
const userRoutes = require('./routes/users'); //Definiendo user router

app.use(mainRoutes);
app.use('/users', userRoutes);

app.use((req, res, next) => {
  const err = new Error('Oh oh! No existe la ruta!');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next)=>{
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
});

app.listen(port, () => {
  console.log('Escuchando en puerto: ', port);
});

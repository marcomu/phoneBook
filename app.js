const express = require('express');
const app = express(); // Importando y ejecutando express
const bodyParser = require('body-parser');
const port = 3000; // Definiendo puerto
const routes = require('./routes'); //Definiendo router

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug'); //Indicando que usaremos template engine Pug

app.use(routes);

app.use((req, res, next) => {
  const err = new Error('No existe esta pagina');
  err.status = 404;
  next(err);
});

//
app.use((err, req, res, next)=>{
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
});


//Escuchando puerto
app.listen(port, () => {
	console.log('Escuchando en puerto: ', port);
});
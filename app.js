const express = require('express');
const app = express(); // Importando y ejecutando express
const bodyParser = require('body-parser')
const port = 3000; // Definiendo puerto

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug'); //Indicando que usaremos template engine Pug

// Definiendo ruta home
app.get('/', (req, res) => {
	res.render('index');
});

// Definiendo ruta users
app.get('/users', (req, res) => {
	res.render('users');
});

//Escuchando puerto
app.listen(port, () => {
	console.log('Escuchando en puerto: ', port);
});
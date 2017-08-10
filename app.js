const express = require('express');
const app = express(); // Importando y ejecutando express
const port = 3000; // Definiendo puerto

app.set('view engine', 'pug'); //Indicando usaremos template engine Pug

// Definiendo primer ruta
app.get('/', (req, res) => {
	res.send('Code Challenge');
});

//Escuchando puerto
app.listen(port, () => {
	console.log('Escuchando en puerto: ', port);
});
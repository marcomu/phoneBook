const express = require('express');
const router = express.Router();

// Definiendo ruta home
router.get('/', (req, res) => {
  res.render('index');
});

// Definiendo ruta users
router.get('/users', (req, res) => {
  res.render('users');
});

// Definiendo ruta users
router.post('/users', (req, res) => {
  res.json(req.body);
});

module.exports = router;
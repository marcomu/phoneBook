const express = require('express');
const router = express.Router();

// Definiendo ruta users
router.get('/', (req, res) => {
  res.render('users');
});

// Definiendo ruta users
router.post('/', (req, res) => {
  res.render('users');
});

module.exports = router;
const express = require('express');
const router = express.Router();

// Definiendo ruta home
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
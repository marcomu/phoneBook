const express = require('express');
const router = express.Router();

//Controlador
const user_controller = require('../controllers/userController');

router.get('/', user_controller.list_all);

router.post('/', user_controller.user_create_post);

module.exports = router;
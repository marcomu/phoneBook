const express = require('express');
const router = express.Router();

//Controlador
const user_controller = require('../controllers/userController');

router.get('/', user_controller.list_all);

router.post('/', user_controller.user_create_post);

router.get('/:id/delete', user_controller.user_delete_get);

router.get('/:id', user_controller.user_detail);

module.exports = router;
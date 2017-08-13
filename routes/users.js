const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });

//Controlador
const user_controller = require('../controllers/userController');

router.get('/', user_controller.list_all);

router.post('/', upload.single('avatar'), user_controller.user_create_post);

router.get('/:id/delete', user_controller.user_delete_get);

router.get('/:id', user_controller.user_detail);

module.exports = router;
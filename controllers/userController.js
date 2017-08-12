const User = require('../models/user.js');

//Mostrar toda la lista de contactos
exports.list_all = (req, res) => {
	User.list_all(res);
}

// Show contacto
exports.user_detail = (req, res) => {
	res.send('Muestra el detalle de contacto', req.params.id);
}

//Create contacto POST
exports.user_create_post = (req, res) => {
  User.create(res, req.body.name, req.body.phone, req.body.avatar);
}

// DELETE
exports.user_delete = function(req, res) {
    res.send('DELETE');
};

// UPDATE
exports.user_update = function(req, res) {
    res.send('UPDATE CONTACT');
};
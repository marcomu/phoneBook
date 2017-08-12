const User = require('../models/user.js');

//Mostrar toda la lista de contactos
exports.list_all = (req, res) => {
	User.list_all(res);
}

// Show contacto
exports.user_detail = (req, res) => {
  User.show(req, res, req.params.id);  
}

//Create contacto POST
exports.user_create_post = (req, res) => {
  User.create(res, req.body.name, req.body.phone, req.body.avatar);
}

// DELETE
exports.user_delete_get = (req, res) => {
  User.delete(req, res, req.params.id);
};

// DETAIL
exports.user_update = function(req, res) {
    res.send('UPDATE CONTACT');
};
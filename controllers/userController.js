const User = require('../models/user.js');

// SHOW ALL
exports.list_all = (req, res) => {
	User.list_all(res);
}

// SHOW DETAIL
exports.user_detail = (req, res) => {
  User.show(req, res, req.params.id);  
}

// CREATE
exports.user_create_post = (req, res) => {
  User.create(res, req.body.name, req.body.phone, req.body.avatar);
}

// DELETE
exports.user_delete_get = (req, res) => {
  User.delete(req, res, req.params.id);
};
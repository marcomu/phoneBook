const db = require('../db.js');

exports.list_all = (res) => {
	db.query("SELECT * FROM user", (err, result, fields) => {
    if (err) throw err;
    res.locals.usuarios = result;
    res.render('users');
  });
}

exports.create = (res, name, phone, avatar) => {
  let values = [name, phone, avatar];
	db.query('INSERT INTO user (name, phone, avatar) VALUES(?, ?, ?)', values,(err, result) => {
		if(err) return done(err);
    res.redirect('users');
  });
}
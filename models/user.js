const db = require('../db.js');
const AWS = require('aws-sdk');
const uuid = require('node-uuid');
const fs = require('fs');

// Creando un cliente S3
const s3 = new AWS.S3();

exports.list_all = (res) => {
	db.query("SELECT * FROM user", (err, result, fields) => {
    if (err) throw err;
    if (result.length < 1){
      result = 0;
    }
    res.locals.usuarios = result;
    res.render('users');
  });
}

exports.create = (req, res) => {
  const avatar = req.file;
  const bucketName = uuid.v4();
  const values = [req.body.name, req.body.phone, avatar.originalname, bucketName];
  db.query('INSERT INTO user (name, phone, avatar, bucket) VALUES(?, ?, ?, ?)', values,(err, result) => {
    if(err) return done(err);

    // Nombrando bucket y avatar
    const keyName = avatar.originalname;
    const bodyFile = fs.createReadStream(avatar.path)
    
    s3.createBucket({Bucket: bucketName}, () => {
      var params = {Bucket: bucketName, Key: keyName, Body: bodyFile, GrantRead: "uri=http://acs.amazonaws.com/groups/global/AllUsers"};
      s3.putObject(params, (err, data) => {
        if (err)
          console.log(err)
        else
          console.log("Imagen subida a S3 en: " + bucketName);
      });
    });

    return res.redirect('/users');
  });
}

exports.delete = (req, res, id) => {
  db.query('DELETE FROM user WHERE id = '+id, (err, result) => {
    if(err) return done(err);
    return res.redirect('/users');
  });
}

exports.show = (req, res, id) => {
  db.query('SELECT * FROM user WHERE id = '+id, (err, result) => {
    if(err) return done(err);
    res.locals.usuario = result[0];
    res.render('user');
  });
}
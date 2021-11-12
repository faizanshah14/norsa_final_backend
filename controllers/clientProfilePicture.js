const models = require('../models/index');

const express = require('express')



const path = require('path')

exports.getImageById = (req, res) => {

  models.clientProfilePicture
    .findByPk(req.params.id)
    .then((data) => {
      console.log(data);
      const file = path.join(__dirname,"../public/images/",data.filePath);
      res.download(file); // Set disposition and send it.
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving CLient Record .',
      });
    });
};

exports.getImageByClientId = (req, res) => {
  models.clientProfilePicture
    .findAll({
      where: {
        Client_id: req.params.Client_id
      }
    })
    .then((data) => {
      const file = path.join(__dirname,"../public/images/",data.filePath);
      res.download(file);
      // res.sendFile('./public/images/'+ data.filePath)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving image of this client.' + req.params.Client_id,
      });
    });
};


exports.createImage = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  if (!req.file) {
    res.status(400).send({ message: 'No File Uploaded!' });
    return;
  }
  
  var insertData = {
    filePath: req.file.filename,
    id: req.body.id,
    Client_id: req.body.Client_id
  }
  models.clientProfilePicture
    .upsert(insertData)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the CLient.',
      });
    });
};



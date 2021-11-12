const models = require('../models/index');

const express = require('express')




exports.getAllClients = (req, res) => {
  const limit = req.params.limit !== undefined ? req.params.limit : 10;
  const offset = req.params.offset !== undefined ? req.params.limit : 0;
  models.client
    .findAll({ limit, offset })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving All clients.',
      });
    });
};

exports.getAllActiveClients = (req, res) => {
  const limit = req.params.limit !== undefined ? req.params.limit : 10;
  const offset = req.params.offset !== undefined ? req.params.limit : 0;
  models.client
    .findAll({ where : {
      Status : 1
    } })
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving All clients.',
      });
    });
};

exports.getClientById = (req, res) => {
  const clientId = req.params.id;
  console.log('id is ', Number.parseInt(clientId, 10));
  models.client
    .findByPk(req.params.id)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving CLient Record .',
      });
    });
};

exports.createClient = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  models.client
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the CLient.',
      });
    });
};

exports.upsertClient = (req, res) => {

  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  models.client
    .upsert(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the CLient.',
      });
    });
};

exports.deleteClient = (req, res) => {
  if (!req.params.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  const id = req.params.id;

  models.client
    .destroy({
      where: {
        id
      },
    })
    .then((num) => {
      if (num === 1) {
        res.send({ message: 'Client was deleted successfully!' });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while Deleting client.',
      });
    });
};

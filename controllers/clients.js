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

exports.getNextK_Id = (req, res) => {
  models.client
    .findAll({ attributes: ['id'] })
    .then((data) => {
      console.log(data);
      let k_Ids = data.filter((item, index) => {
        if (item.id.includes("k") || item.id.includes("K"))
          return item
      })
      if (k_Ids.length == 0) {
        res.json({ id: "K-0001" })
        return;
      }
      let k_Id = k_Ids[k_Ids.length - 1]
      let nextId = parseInt(k_Id.id.substring(2, k_Id.id.length)) + 1
      if (nextId < 10) {
        nextId = "K-000" + nextId
      }
      else if (nextId < 100) {
        nextId = "K-00" + nextId
      }
      else if (nextId < 1000) {
        nextId = "K-0" + nextId
      }
      else {
        nextId = "K-" + nextId
      }
      res.json({ id: nextId })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving All clients.',
      });
    });
};
exports.getNextD_Id = (req, res) => {
  models.client
    .findAll({ attributes: ['id'] })
    .then((data) => {
      console.log(data);
      let D_Ids = data.filter((item, index) => {
        if (item.id.includes("d") || item.id.includes("D"))
          return item
      })
      if (D_Ids.length == 0) {
        res.json({ id: "K-0001" })
        return;
      }
      let D_Id = D_Ids[D_Ids.length - 1]
      let nextId = parseInt(D_Id.id.substring(2, D_Id.id.length)) + 1
      if (nextId < 10) {
        nextId = "D-000" + nextId
      }
      else if (nextId < 100) {
        nextId = "D-00" + nextId
      }
      else if (nextId < 1000) {
        nextId = "D-0" + nextId
      }
      else {
        nextId = "D-" + nextId
      }
      res.json({ id: nextId })
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
    .findAll({
      where: {
        Status: 1
      }
    })
    .then((data) => {
      console.log(data);
      data = data.filter((item) => {
        if (item.id.includes("d") || item.id.includes("D")) {
          return item
        }
      })
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

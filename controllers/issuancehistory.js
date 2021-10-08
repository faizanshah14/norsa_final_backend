const models = require('../models/index');

exports.getAllIssuancehistories = (req, res) => {
  const limit = req.params.limit !== undefined ? req.params.limit : 10;
  const offset = req.params.offset !== undefined ? req.params.limit : 0;
  models.issuancehistory
    .findAll({ limit, offset })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving All issuancehistory.',
      });
    });
};

exports.getAllIssuancehistoriesByAmountPaid = (req, res) => {
  const limit = req.params.limit !== undefined ? req.params.limit : 10;
  const offset = req.params.offset !== undefined ? req.params.limit : 0;
  models.issuancehistory
    .findAll({
      where: {
        AmountPaid: null
      } ||
      {
        AmountPaid: 0
      }
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving All issuancehistory.',
      });
    });
};

exports.getissuancehistoryById = (req, res) => {
  models.issuancehistory
    .findByPk(req.params.id)
    .then((data) => {
      res.json(data);
      
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Issuancehistory Record .',
      });
    });
};
exports.getissuancehistoryByClientId = (req, res) => {
  models.issuancehistory
    .findAll({
      where: {
        Client_id: req.params.Client_id
      }
    })
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving All issuancehistory.',
      });
    });
};
exports.createIssuancehistory = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  models.issuancehistory
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Issuancehistory.',
      });
    });
};

exports.upsertIssuancehistory = (req, res) => {

  if (!req.body.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  models.issuancehistory
    .upsert(req.body)
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Issuancehistory.',
      });
    });
};

exports.deleteIssuancehistory = (req, res) => {
  if (!req.params.id) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  const id = req.params.id;
  models.issuancehistory
    .destroy({
      where: {
        id
      },
    })
    .then((num) => {
      if (num === 1) {
        res.send({ message: 'Issuancehistory was deleted successfully!' });
      } else {
        res.send({
          message: `Cannot delete Issuancehistory with id=${id}. Maybe Issuancehistory was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while Deleting Issuancehistory.',
      });
    });
};

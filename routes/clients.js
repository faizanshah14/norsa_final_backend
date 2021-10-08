const express = require('express');
const router = express.Router();
const clients = require('../controllers/clients');


router.get('/getAllClients/:limit&:offset', clients.getAllClients);
router.get('/getAllClients', clients.getAllClients);
router.get('/getClientById/:id', clients.getClientById);
router.post('/createClient', clients.createClient);
router.post('/upsertClient', clients.upsertClient);
router.delete('/deleteClient/:id', clients.deleteClient);
module.exports = router;

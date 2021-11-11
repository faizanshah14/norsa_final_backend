const express = require('express');
const router = express.Router();
const clients = require('../controllers/clients');
const multer = require('multer')



router.post('/upsertClient', clients.upsertClient);
module.exports = router;

router.get('/getActiveClientList', clients.getAllActiveClients)

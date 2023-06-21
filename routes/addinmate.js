var express = require('express');
const router = express.Router();
const addinmateController = require('../controller/addinmateController');

router.get('/addinmate', addinmateController.getAddinmate);
router.post('/addinmate', addinmateController.postAddinmate);

module.exports = router;

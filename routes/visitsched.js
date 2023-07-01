var express = require('express');
const router = express.Router();
const visitschedController = require('../controller/visitschedController');

router.get('/visitsched/:id', visitschedController.getVisitSched);
router.post('/visitsched', visitschedController.postVisitSched);

module.exports = router;
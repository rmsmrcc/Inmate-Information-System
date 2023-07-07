var express = require('express');
const router = express.Router();
const visitviewController = require('../controller/visitviewController');

router.get('/visitview/:id', visitviewController.getVisitView);

module.exports = router;
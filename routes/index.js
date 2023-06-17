var express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');

router.get('/index', indexController.getIndex );
router.post('/index', indexController.postIndex );

module.exports = router;

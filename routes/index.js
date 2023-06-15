var express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');

router.get('/', indexController.getIndex );
router.get('/index', indexController.postIndex );

module.exports = router;

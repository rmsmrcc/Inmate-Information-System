var express = require('express');
const router = express.Router();
const visitorindexController = require('../controller/visitorindexController');

router.get('/visitorindex', visitorindexController.getVisitorIndex);
// router.post('/sched', schedController.postSched);
module.exports = router;

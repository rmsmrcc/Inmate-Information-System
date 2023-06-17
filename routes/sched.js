var express = require('express');
const router = express.Router();
const schedController = require('../controller/schedController');

router.get('/sched', schedController.getSched);
router.post('/sched', schedController.postSched);

module.exports = router;

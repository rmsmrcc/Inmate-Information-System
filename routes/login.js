const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

router.get('/', loginController.getLogin);
router.get('/visitlog', loginController.getVisitorLogin);
router.get('/adminlog', loginController.getAdminLogin);
router.post('/adminlog', loginController.postAdminLogin);
router.post('/visitlog', loginController.postVisitLogin);

module.exports = router;


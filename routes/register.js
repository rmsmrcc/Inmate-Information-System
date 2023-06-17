const express = require('express');
const router = express.Router();
const registerController = require('../controller/registerController');

router.get('/visitreg', registerController.getVisitorRegister);
router.get('/adminreg', registerController.getAdminRegister);
router.post('/adminreg', registerController.postAdminRegister);
router.post('/visitreg', registerController.postVisitorRegister);
module.exports = router;


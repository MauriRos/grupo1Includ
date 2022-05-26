const express= require('express');
const router = express.Router();
const userController = require('../controllers/userController.js')

router.get("/loginRegister", userController.loginRegister)




module.exports = router ;
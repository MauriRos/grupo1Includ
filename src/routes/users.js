const express= require('express');
const router = express.Router();
const userController = require('../controllers/userController.js')

router.get("/loginRegister", userController.loginRegister)

router.get("/createProduct", userController.createProduct)


module.exports = router ;
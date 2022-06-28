const express= require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js')

router.get("/", mainController.home)
router.get("/home2", mainController.home2)

module.exports = router ;
const express= require('express');
const router = express.Router();
const apiUserController = require('./apiUserController');
const path= require('path');

router.get("/", apiUserController.usersList)
router.get("/:id", apiUserController.detail)
router.get("lastUser", apiUserController.lastUser)

module.exports = router;
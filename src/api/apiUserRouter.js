const express= require('express');
const router = express.Router();
const apiUserController = require('./apiUserController');

router.get("/", apiUserController.usersList)
router.get("/:id", apiUserController.detail)

module.exports = router;
const express= require('express');
const router = express.Router();
const apiUserController = require('./apiUserController');

router.get("/", apiUserController.usersList)
router.get("/lastUser", apiUserController.lastUser)
router.get("/:id", apiUserController.detail)

module.exports = router;
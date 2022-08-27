const express= require('express');
const router = express.Router();
const apiProductsController = require('./apiProductsController');
const multer = require('multer');
const path = require('path')
const authMiddleware = require('../middleware/authMiddleware.js');
const {body} = require('express-validator');
const { countByCategory } = require('./apiProductsController');

router.get("/", apiProductsController.productsList);
router.get("/lastproduct", apiProductsController.lastproduct);
router.get('/countByCategory', apiProductsController.countByCategory)
router.get("/:id", apiProductsController.detail)

module.exports = router;
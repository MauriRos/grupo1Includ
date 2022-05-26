const express= require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js')

router.get("/productDetail", productsController.detail)

router.get("/productCart", productsController.cart)
router.get("/create", productsController.createProductView)

router.post("/create", productsController.createProduct)

module.exports = router ;
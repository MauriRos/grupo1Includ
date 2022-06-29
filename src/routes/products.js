const express= require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');
const multer = require('multer');
const path = require('path')
const authMiddleware = require('../middleware/authMiddleware.js');

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, 'public/images/products'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  });

const uploadFile = multer({ storage });

router.get("/productDetail", productsController.detail)
router.get("/productsList", productsController.productsList)
router.get("/productCart", authMiddleware, productsController.cart);
router.get("/create", authMiddleware, productsController.createProductView);
router.get("/:id/edit", authMiddleware, productsController.editView);
router.get("/", productsController.productsList);
router.get("/:id", productsController.detail);


router.post("/create", uploadFile.any(), productsController.createProduct);
router.put("/:id/edit", uploadFile.any(), productsController.edit);
router.delete("/:id", productsController.delete);


module.exports = router ;
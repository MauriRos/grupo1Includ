const express= require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, 'public/images/products'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  });

const uploadFile = multer({ storage });

router.get("/productDetail", productsController.detail)

router.get("/productCart", productsController.cart);
router.get("/create", productsController.createProductView);
router.get("/:id/edit",productsController.editView);
router.get("/", productsController.productsList);
router.get("/:id", productsController.detail)


router.post("/create", uploadFile.single('image'), productsController.createProduct);
router.put("/:id/edit", productsController.edit);
router.delete("/:id", productsController.delete);


module.exports = router ;
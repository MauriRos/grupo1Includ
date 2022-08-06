const express= require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');
const multer = require('multer');
const path = require('path')
const authMiddleware = require('../middleware/authMiddleware.js');
const {body} = require('express-validator');

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, 'public/images/products'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  });

const uploadFile = multer({ storage });
const validateProductsForm = [
   body('name').notEmpty().withMessage('Nombre de producto obligatorio'),
   body('name').isLength({min: 5}).withMessage('Longitud mínima 5 caracteres'),
   body('description').isLength({min: 2}).withMessage('Longitud mínima 20 caracteres'),
   body('image').custom((value, {req}) => {
      if(req.files[0].mimetype === "image/jpeg" || req.files[0].mimetype === "image/png" || req.files[0].mimetype === "image/gif"){
         return "valid format"
      }else{
         return false;
      }
  }).withMessage("Formatos de imagen válidos: JPG, PNG o GIF")
]


router.get("/productDetail", productsController.detail)
router.get("/productsList", productsController.productsList)
router.get("/productCart", authMiddleware, productsController.cart);
router.get("/create", authMiddleware, productsController.createProductView);
router.get("/:id/edit", authMiddleware, productsController.editView);
router.get("/", productsController.productsList);
router.get("/:id", productsController.detail);


router.post("/create", uploadFile.any(), validateProductsForm, productsController.createProduct);
router.put("/:id/edit", uploadFile.any(), validateProductsForm, productsController.edit);
router.delete("/:id", productsController.delete);


module.exports = router ;
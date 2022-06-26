const express= require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const multer = require('multer');
const path= require('path');
const {body} = require('express-validator');


const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, 'public/images/users'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_avatar_${path.extname(file.originalname)}`);  } 
  });

const uploadFile = multer({ storage });

//Validaciones
const validateRegisterForm = [
   body('name').notEmpty().withMessage('Nombre obligatorio'),
   body('apellido').notEmpty().withMessage('Apellido obligatorio'),
   body('email').isEmail().withMessage('Ingrese un email correcto'),
   body('user').notEmpty().withMessage('Ingrese su nombre de usuario'),
   body('password').isLength({min:8}).withMessage('Constraseña minimo 8 caracteres'),
]

const validacionesLogin = [
   body("email").isEmail().withMessage("Email invalido"),
   body("password").isLength({min: 8}).withMessage("La constraseña debe tener 8 caracteres como minimo")	
]


router.get("/loginRegister", userController.loginRegister);

router.post("/register",  uploadFile.any(), validateRegisterForm,userController.register)
router.post("/login", validacionesLogin, userController.login);




module.exports = router ;
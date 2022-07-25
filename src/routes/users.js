const express= require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const multer = require('multer');
const path= require('path');
const {body} = require('express-validator');
const guestMiddleware = require('../middleware/guestMiddleware.js');
const rememberMiddleware = require('../middleware/rememberMiddleware.js');


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
   body('lastName').notEmpty().withMessage('Apellido obligatorio'),
   body('email').isEmail().withMessage('Ingrese un email correcto'),
   body('userName').notEmpty().withMessage('Ingrese su nombre de usuario'),
   body('password').isLength({min:8}).withMessage('Constraseña minimo 8 caracteres'),
]

const validacionesLogin = [
   body("email").isEmail().withMessage("Email invalido"),
   body("password").isLength({min: 8}).withMessage("La constraseña debe tener 8 caracteres como minimo")	
]


router.get("/loginRegister", guestMiddleware, userController.loginRegister);

router.post("/register",  uploadFile.any(), validateRegisterForm,userController.register)
router.post("/login", validacionesLogin, rememberMiddleware, userController.login);
router.get("/check", userController.check);
router.get("/logOut", userController.logOut);
router.get("/logIn", userController.logIn)


module.exports = router ;
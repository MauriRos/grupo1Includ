const express= require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const multer = require('multer');
const path= require('path');

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, 'public/images/users'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_avatar_${path.extname(file.originalname)}`);  } 
  });

const uploadFile = multer({ storage });


router.get("/loginRegister", userController.loginRegister)
router.post("/register", uploadFile.any(), userController.register)




module.exports = router ;
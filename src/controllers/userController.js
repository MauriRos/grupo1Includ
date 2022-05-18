const path = require('path');
let ejs = require(('ejs'));

const userController = {
    loginRegister: (req,res) => {
        res.render('loginRegister')
    },
    createProduct: (req,res) => {
            res.render('createProduct')
    }

}

module.exports = userController;
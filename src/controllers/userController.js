const path = require('path');
let ejs = require(('ejs'));

const userController = {
    loginRegister: (req,res) => {
        res.render('loginRegister')
        },
    }

module.exports = userController;
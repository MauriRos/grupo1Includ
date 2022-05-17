const path = require('path');
let ejs = require(('ejs'));

const mainController = {
    home: (req,res) => {
        res.render('home')
        },
    }
    
    
module.exports = mainController;
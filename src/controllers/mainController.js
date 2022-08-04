const path = require('path');
let ejs = require(('ejs'));
const fs = require('fs');
const db = require("../../database/models");



const mainController = {
 
    home: (req,res) => {
        db.Product.findAll()
        .then(products => {
            res.render("home", {products})
        });
        
    }  
};

    
    
module.exports = mainController;
const path = require('path');
let ejs = require(('ejs'));
const fs = require('fs');
const db = require("../../database/models");



const mainController = {
    // home: (req,res) => {
    //     res.render ('home', {products: products})
    // },
    home: (req,res) => {
        db.Product.findAll()
        .then(products => {
            console.log(products);
            res.render("home", {products})
        });
        
    }

    
    // home2: (req,res) => {
    //     res.render ('home2', {products: products})
    // }
};

    
    
module.exports = mainController;
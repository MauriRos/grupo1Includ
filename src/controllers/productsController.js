const path = require('path');
let ejs = require(('ejs'));

const productsController = {
    cart: (req,res) => {
        res.render('productCart')
        },
    detail: (req,res) => {
        res.render('productDetail')
        }
    }
    

module.exports = productsController;
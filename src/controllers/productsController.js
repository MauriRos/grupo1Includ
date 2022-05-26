const path = require('path');
let ejs = require(('ejs'));
const fs = require('fs')

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    cart: (req,res) => {
        res.render('productCart')
        },
    detail: (req,res) => {
        res.render('productDetail')
        },
    createProductView: (req,res) => {
        res.render('createProduct')
    },
    createProduct: (req,res) => {
        let image
		
		if(req.files[0] != undefined){
			image = req.files[0].filename;
		
		}else{
			image= 'default-image.png'
		}
		
		let newProduct={
		id: products[products.length - 1].id + 1,
		...req.body,
		image: image,
	}
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products))
		res.redirect('/products')
	},
    edit: (req,res) => {
        let id =req.params.id;
		let product = products.find(product => product.id == id)
		res.render('edit', product )
	},
    update: (req, res) => {
		let id= req.params.id;
		let product = products.find(product => product.id == id);

		let image
		
		if(req.files[0] != undefined){
			image = req.files[0].filename;
		
		}else{
			image= productToEdit.image
		}


		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image:image,

		}

		fs.writeFileSync(productsFilePath, JSON.stringify(products));
		res.redirect('/products')

	},
    }
    

module.exports = productsController;
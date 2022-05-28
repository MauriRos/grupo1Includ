const path = require('path');
let ejs = require(('ejs'));
const fs = require('fs');


const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    cart: (req,res) => {
        res.render('productCart')
        },
    detail: (req,res) => {
		let id =req.params.id;
		let product = products.find(product => product.id == id)
		res.render('productDetail', product )
	},
	productsList: (req,res) => {
		res.render('productsList')
	},
    createProductView: (req,res) => {
        res.render('createProduct')
    },
	editView: (req,res) => {
		let id =req.params.id;
		let product = products.find(product => product.id == id)
		res.render('edit', product )
	},
    createProduct: (req,res) => {
        let image
		
		if(req.files[0] != undefined){
			image = req.files[0].filename;
		
		}else{
			image= 'default-image.png'
		}
		console.log(req.body);
		console.log(req.files)	
		let newProduct={
		id: products[products.length - 1].id + 1,
		...req.body,
		image: image,
	}
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products))
		res.redirect('/')
	},
    edit: (req, res) => {
		let id= req.params.id;
		let productToEdit = products.find(product => product.id == id);

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
		res.redirect('/')

	},
	delete: (req,res) => {
		let id= req.params.id;
		let product = products.find(product => product.id == id);
		let products = products.filter(productToDelete => {return productToDelete.id != product.id  });
		fs.writeFileSync(productsFilePath, JSON.stringify(products));
		res.redirect('/products');
	},
    }
    

module.exports = productsController;
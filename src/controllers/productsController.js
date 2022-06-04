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
		let product = products.find(product => product.id == id);
		res.render('productDetail2', {products: products, product} )
	},
	productsList: (req,res) => {
		res.render('productsList', {products: products})
	},
    createProductView: (req,res) => {
        res.render('createProduct')
    },
	editView: (req,res) => {
		let id =req.params.id;
		let product = products.find(product => product.id == id);
		res.render('edit', {products: products, product} )
	},
    createProduct: (req,res) => {
		let image =[];
        for(let i=0; i<req.files.length; i++){
		
		if(req.files[i] != undefined){
			
			image[i] = req.files[i].filename;
		
		}else{
			image= 'default-image.png'
		}
		}
		console.log(image);
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
		let id =req.params.id;
		let product = products.find(product => product.id == id);
		let image =[];
		
		if(req.files[0] != undefined){
			for(let i=0; i<req.files.length; i++){
			image[i] = req.files[i].filename;
		}}
		else{
			image= product.image
		}
		
		product={
		id: product.id,
		...req.body,
		image: image,
	};
		products[id-1]= product;
		fs.writeFileSync(productsFilePath, JSON.stringify(products))
		res.redirect('/')
	},
	delete: (req,res) => {
		console.log('andando');
		let id= req.params.id;
		console.log(id);
		let product = products.find(product => product.id == id);
		let productsFilter = products.filter(productToDelete => productToDelete.id != product.id);
		fs.writeFileSync(productsFilePath, JSON.stringify(productsFilter));
		res.redirect('/');
	},
    }
    

module.exports = productsController;
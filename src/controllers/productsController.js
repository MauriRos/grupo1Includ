const path = require('path');
let ejs = require(('ejs'));
const fs = require('fs');
const db = require("../../database/models");
const { Console } = require('console');


const productsController = {
    cart: (req,res) => {
        res.render('productCart', {products: products})
        },
    detail: (req,res) => {
		db.Product.findByPk(req.params.id, {
			include: [
				{association: "sizes"},
				{association: "colors"},
				{association: "categories"}
			]
		})
			.then(function(products){
				res.render('productDetail2', {products:products} ) 
			}) 
	},
	productsList: (req,res) => {
		db.Product.findAll()
			.then(products => {
				res.render("productsList", {products})
			})
	},
	// const genresController = {
	// 	'list': (req, res) => {
	// 		db.Genre.findAll()
	// 			.then(genres => {
	// 				res.render('genresList.ejs', {genres})
	// 			})
	// 	},
	// 	'detail': (req, res) => {
	// 		db.Genre.findByPk(req.params.id)
	// 			.then(genre => {
	// 				res.render('genresDetail.ejs', {genre});
	// 			});
	// 	}
	
	// }
    createProductView: (req,res) => {
		let dbSize = db.Size.findAll();
		let dbColor = db.Color.findAll();
		let dbCategory = db.CategoryProduct.findAll();
		Promise.all([dbSize, dbColor, dbCategory])
			.then(function([sizes, colors, categories]){
			res.render('createProduct', {sizes:sizes, colors:colors, categories:categories })
		}); 
		 
    },
	editView: (req,res) => {
		db.Product.findByPk(req.params.id)
		.then(function(product){
			res.render('edit', {products: products, product} )
		})
	},
    createProduct: (req,res) => {
		let image ="";
		
		if(req.files != undefined){
			
			image = req.files.filename;
		
		}else{
			image= 'default-image.png'
		};
		
		db.Product.create({
			name: req.body.name,
			description: req.body.description,
			characteristics: req.body.characteristics,
			sizing: req.body.sizing,
			categoryProductId: req.body.categoryProduct,
			colorsId: req.body.color,
			sizeId: req.body.size,
			price: req.body.price, 
			stock: req.body.cantidad,  
			image: req.files.filename 
		});
		res.redirect("/products/productsList") 
	},
    edit: (req, res) => {
		db.Product.update({
			name: req.body.name,
			description: req.body.description,
			characteristics: req.body.characteristics,
			sizing: req.body.sizing,
			categoryProductId: req.body.categoryProduct,
			colorId: req.body.color,
			sizeId: req.body.size,
			price: req.body.price,
			stock: req.body.cantidad,
			image: req.body.image
		}, {
			where: {
				id: req.params.id
			}
		});
		res.redirect("/productDetail2/"+ req.params.id)

	},
	delete: (req,res) => {
		db.Product.destroy({
			where: {id: req.params.id}
		})
		res.redirect('/');
	},
}
    

module.exports = productsController;
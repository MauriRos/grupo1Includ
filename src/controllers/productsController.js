const path = require('path');
let ejs = require(('ejs'));
const fs = require('fs');
const db = require("../../database/models");
const { Console } = require('console');
const { devNull } = require('os');


const productsController = {
    cart: (req,res) => {
        res.render('productCart', {products: products})
        },
    detail: (req,res) => {
		let dbProd = db.Product.findByPk(req.params.id, {
			include: [
				{association: "sizes"},
				{association: "colors"},
				{association: "categories"}
			]
		});

		let dbColor = db.Color.findAll();
		Promise.all([dbProd, dbColor])
			.then(function([products, colors]){
				res.render('productDetail2', {products:products, colors: colors} ) 
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
		let dbSize = db.Size.findAll();
		let dbColor = db.Color.findAll();
		let dbCategory = db.CategoryProduct.findAll();
		let dbProd = db.Product.findByPk(req.params.id, {
			include: [
				{association: "sizes"},
				{association: "colors"},
				{association: "categories"}
			]
		})
		Promise.all([dbSize, dbColor, dbCategory, dbProd])
			.then(function([sizes, colors, categories, products]){
			res.render('edit', {sizes:sizes, colors:colors, categories:categories, products:products })
		});
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
		
		let dbProd = db.Product.update({
			id: req.body.id,
			name: req.body.name,
			description: req.body.description,
			characteristics: req.body.characteristics,
			sizing: req.body.sizing,
			categoryProductId: req.body.categoryProduct,
			colorsId: req.body.color,
			sizeId: req.body.size,
			price: req.body.price,
			stock: req.body.cantidad,
			image: req.body.image
		}, {
			where: {
				id: req.params.id
			}
		});
		Promise.all([dbProd])
		.then(function([products]){
		res.redirect("/products/"+ req.params.id)
		})

	},
	delete: (req,res) => {
		db.Product.destroy({
			where: {id: req.params.id}
		})
		res.redirect('/');
	},
}
    

module.exports = productsController;
const path = require('path');
let ejs = require(('ejs'));
const fs = require('fs');
const db = require("../../database/models");
const {validationResult} = require('express-validator');
// const { Console } = require('console');
// const { devNull } = require('os');


const productsController = {
    cart: (req,res) => {
		let dbSize = db.Size.findAll();
		let dbColor = db.Color.findAll();
		let dbCategory = db.CategoryProduct.findAll();
		let dbProd = db.Product.findAll()   
		Promise.all([dbSize, dbColor, dbCategory, dbProd])
			.then(function([sizes, colors, categories, products]){
				 
			res.render('productCart', {sizes:sizes, colors:colors, categories:categories, products:products })
		}) 
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
			res.render('createProduct', {sizes:sizes, colors:colors, categories:categories})
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
		// Probar con un switch	
		// if (req.files.length) {
        //     req.files.forEach(file => {
        //         let { fieldname } = file
        //         switch (fieldname) {
        //             case "img1":
        //                 img1 = file.filename
        //                 break;
        //             case "img2":
        //                 img2 = file.filename
        //                 break;
        //             case "img3":
        //                 img3 = file.filename
        //                 break;
        //             default:
        //                 break;
        //         }
        //     })
        // }
		let errorsProduct = validationResult(req)
        if(!errorsProduct.errors[0]){
			let image ;
			if(req.files[0] != undefined){	
				image = req.files[0].filename
			}else{
			image = 'default-image.png'
			};
			let image2 ;
			if(req.files[1] != undefined){	
				image2 = req.files[1].filename
			}else{
				image2 = 'default-image.png'
			};
			let image3 ;
			if(req.files[2] != undefined){	
				image3 = req.files[2].filename
			}else{
				image3 = 'default-image.png'
			};
			let image4 ;
			if(req.files[3] != undefined){	
				image4 = req.files[3].filename
			}else{
				image4 = 'default-image.png'
			};
			let image5 ;
			if(req.files[4] != undefined){	
				image5 = req.files[4].filename
			}else{
				image5 = 'default-image.png'
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
				image: image,
				image2: image2,
				image3: image3,
				image4: image4,
				image5: image5
			});
			res.redirect("/products/productsList") 
	}else{
		let dbSize = db.Size.findAll();
		let dbColor = db.Color.findAll();
		let dbCategory = db.CategoryProduct.findAll();
		
		Promise.all([dbSize, dbColor, dbCategory])
			.then(function([sizes, colors, categories]){
			return res.render('createProduct', {sizes:sizes, colors:colors, categories:categories, errorsProduct: errorsProduct.errors})
		})
		}
	},
    edit: (req, res) => {
		let errorsProduct = validationResult(req)
            if(!errorsProduct.errors[0]){
		let image;
		if (req.files[0]){
			image = req.files[0].filename
		}else{ image = req.params.image}

		let image2;
		if (req.files[1]){
			image2 = req.files[1].filename
		}else{ image2 = req.params.image2}

		let image3;
		if (req.files[2]){
			image3 = req.files[2].filename
		}else{ image3 = req.params.image3}

		let image4;
		if (req.files[3]){
			image4 = req.files[3].filename
		}else{ image4 = req.params.image4}

		let image5;
		if (req.files[4]){
			image5 = req.files[4].filename
		}else{ image5 = req.params.image5}

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
			image: image,
			image2: image2,
			image3: image3,
			image4: image4,
			image5: image5
		}, {
			where: {
				id: req.params.id
			}
		});
		Promise.all([dbProd])
		.then(function([products]){
		res.redirect("/products/"+ req.params.id)
		})}else{
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
					res.render('edit', {sizes:sizes, colors:colors, categories:categories, products:products, errorsProduct: errorsProduct.errors })
				})}

	},
	delete: (req,res) => {
		db.Product.destroy({
			where: {id: req.params.id}
		})
		res.redirect('/');
	},
	search: (req,res) => {
		console.log("entro a search")
		let searchName = req.body.searchName;
		db.Product.findOne({
			where: {name: searchName}
		})
		.then(function(products){
			return res.render('searchResult', {products: products})
		})
	}

}
    

module.exports = productsController;
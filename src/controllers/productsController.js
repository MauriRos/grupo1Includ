const path = require('path');
let ejs = require(('ejs'));
const fs = require('fs');
const db = require("../../database/models");
// const { Console } = require('console');
// const { devNull } = require('os');


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
	
		let imagen ;
		if(req.files[0] != undefined){	
			imagen = req.files[0].filename
		}else{
		imagen = 'default-image.png'
		};
		let imagen2 ;
		if(req.files[1] != undefined){	
			imagen2 = req.files[1].filename
		}else{
			imagen2 = 'default-image.png'
		};
		let imagen3 ;
		if(req.files[2] != undefined){	
			imagen3 = req.files[2].filename
		}else{
			imagen3 = 'default-image.png'
		};
		let imagen4 ;
		if(req.files[3] != undefined){	
			imagen4 = req.files[3].filename
		}else{
			imagen4 = 'default-image.png'
		};
		let imagen5 ;
		if(req.files[4] != undefined){	
			imagen5 = req.files[4].filename
		}else{
			imagen5 = 'default-image.png'
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
			image: imagen,
			image2: imagen2,
			image3: imagen3,
			image4: imagen4,
			image5: imagen5
		});
		res.redirect("/products/productsList") 
	},
    edit: (req, res) => {
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
const path = require('path');
let ejs = require(('ejs'));
const fs = require('fs');
const db = require("../../database/models");
const {validationResult} = require('express-validator');

const apiProductsController = {
	productsList:  (req, res) => {
		let top =  db.Product.count({
			where: { categoryProductId: 1 }
		});
		let pantalon =  db.Product.count({
			where: { categoryProductId: 2 }
		});
		let accesorio =  db.Product.count({
			where: { categoryProductId: 3 }
		});

		let products =  db.Product.findAll({
			include: [
				"sizes",
				"colors",
				"categories"
			]
		});
		Promise.all([top, pantalon, accesorio, products])
		.then(([top, pantalon, accesorio, products]) => {
		let productsArray = products.map(product => {
			let producto = {
				id: product.id,
				name: product.name,
				description: product.description,
	 			sizes: product.sizes,
				colors: product.colors,
				category: product.categories,
	 			detail: "/api/products/" + product.id
			}
			return producto
		})
		return res.json({
			count: products.length,
			countByCategory: {
				pantalon: pantalon,
				top: top,
				accesorios: accesorio
			},
			products: productsArray
		})
	})
	},
	detail: (req, res) => {
		db.Product.findByPk(req.params.id, {
			include: [
				"sizes",
				"colors",
				"categories"
			]
		})
			.then(product => {
				let respuesta = {
					product,
					relaciones: "//un array por cada relacion de uno a muchos",
					urlImagen: "/images/products/" + product.image
				}
				return res.json(respuesta)
			})
			.catch(error => res.send("Este producto no se encuentra disponible"))
	}
}

module.exports = apiProductsController;
const path = require('path');
let ejs = require(('ejs'));
const fs = require('fs');
const db = require("../../database/models");
const {validationResult} = require('express-validator');

const apiProductsController = {
	productsList: async (req, res) => {
		let top = await db.Product.count({
			where: { categoryProductId: 1 }
		});
		let pantalon = await db.Product.count({
			where: { categoryProductId: 2 }
		});
		let accesorio = await db.Product.count({
			where: { categoryProductId: 3 }
		});

		let products = await db.Product.findAll();
		
		let productsArray = products.map(product => {
			let producto = {
				id: product.id,
				name: product.name,
				description: product.description,
	 			relaciones: "ver bien que pide la consigna",
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
	},
	detail: (req, res) => {
		db.Product.findByPk(req.params.id)
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
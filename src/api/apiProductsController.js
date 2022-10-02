const path = require('path');
const fs = require('fs');
const db = require("../../database/models");
const Sequelize = require('sequelize')

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
			products: productsArray,
			urlProductsList: "http://localhost:3000/products/productsList"
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
					urlImagen: "/images/products/" + product.image,
					
				}
				return res.json(respuesta)
			})
			.catch(error => res.send("Este producto no se encuentra disponible"))
	},
	lastproduct: (req, res) => {
		db.Product.findAll({
			attributes: [Sequelize.fn('max', Sequelize.col('id'))],
			raw: true,
		}
		)
			.then(product => {
				let id = product[0]['max(`id`)']
				return id
			})
			.then(id => db.Product.findByPk(id, {
				include: [
					"sizes",
					"colors",
					"categories" 
				]
			})
				.then(product => {
					let respuesta = {
						product,
						urlImagen: "/images/products/" + product.image ,
						urlProduct: "http://localhost:3000/products/" + product.id
					}
					return res.json(respuesta)
				})
				.catch(error => res.send("Este usuario no se encuentra disponible"))
			)
	},
	countByCategory: (req,res) => {
		let top =  db.Product.count({
			where: { categoryProductId: 1 }
		});
		let pantalon =  db.Product.count({
			where: { categoryProductId: 2 }
		});
		let accesorio =  db.Product.count({
			where: { categoryProductId: 3 }
		});
		Promise.all([top, pantalon, accesorio])
		.then(([top, pantalon, accesorio]) => {
			let respuesta = {
					pantalon: pantalon,
					top: top,
					accesorios: accesorio
				}
			return res.json(respuesta)
			}
		)
	}
}


module.exports = apiProductsController;
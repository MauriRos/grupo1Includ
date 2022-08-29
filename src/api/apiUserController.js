const fs = require('fs');
const db = require("../../database/models");
const { response } = require('express');

const apiUserController = {
	usersList: async (req, res) => {
		const users = await db.User.findAll()
		let usersArray = users.map(user => {
			let usuario = {	id: user.id,
							name: user.name,
							email: user.email,
							detail: '/api/users/' + user.id
								};
			return usuario
					});
				return res.json({
					count: users.length,
					users: usersArray,
					status: 200
				}
				)
			},
	detail: (req, res) => {
		db.User.findByPk(req.params.id)
			.then(user => {
				return res.json({
					id: user.id,
					name: user.name,
					lastName: user.lastName,
					userName: user.userName,
					email: user.email,
					avatarURL: '/images/users/' + user.avatar
				})
			})
			.catch(error => res.send("Este usuario no se encuentra en la base de datos"))
	}

}

module.exports = apiUserController
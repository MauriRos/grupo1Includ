const path = require('path');
let ejs = require(('ejs'));
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const rememberMiddleware = require('../middleware/rememberMiddleware');
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

					// users con: id, name, email, detail con url al detail
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
					avatarURL: 'images/user/' + user.avatar
				})
			})
	}

}

module.exports = apiUserController
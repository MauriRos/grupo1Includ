const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require("../../database/models");
const { response } = require('express');

 

const userController = {
    login: (req, res) => {
        // VALIDACIONES
        let errorsLogin = validationResult(req);
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(function (userInDB) {
                if (errorsLogin.isEmpty()) {
                    if (userInDB) {
                        if (bcrypt.compareSync(req.body.password, userInDB.password)) {
                            req.session.userLogueado = userInDB;

                            if (req.body.remember != undefined) {
                                res.cookie("remember", req.body.email, { maxAge: 600000000 });
                            }
                            res.redirect("/")
                        } else {
                            return res.render('loginRegister', {
                                errorsLogin: [{
                                    msg: "Credenciales invalidas"
                                }]
                            });
                        }
                    } else {
                        res.render("loginRegister", {
                            errorsLogin: [{
                                msg: "No hay un usuario registrado con el email " + req.body.email +", registrese!"
                            }]
                        })
                    }
                } else {
                    return res.render('loginRegister', { errorsLogin: errorsLogin.errors }
                    )
                };
            })
    },
 
    loginRegister: (req,res) => {
        res.render('loginRegister')
    },

    register: (req,res) => {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(userInDB){
            let errorsRegister = validationResult(req)
            if(!errorsRegister.errors[0]){
                if(!userInDB){
                    //Creación del usuario
                        let avatar;
                            if(req.files[0] !=undefined){
                                avatar = req.files[0].filename
                                }else{
                                    avatar = "default-avatar.jpg"
                            }
        
                        db.User.create({
                            name: req.body.name,
                            lastName: req.body.lastName,
                            userName: req.body.userName,
                            email: req.body.email,
                            password: bcrypt.hashSync(req.body.password, 10),
                            avatar: avatar,
                            permissionId: 2
                        });
                        return res.redirect('/')
                        }
                if(userInDB.email){
                    return res.render('loginRegister',{
                        errorsRegister:  
                        [{ msg:'Este email ya está registrado'
                            }]
                        },
                     );
                }} else {
                    return res.render('loginRegister', {errorsRegister: errorsRegister.errors}
                )}
                    
                    
    })},
    logOut: (req,res) => {
        res.clearCookie("remember")
        req.session.destroy();
        return res.redirect('/')
    },
    forbidden: (req,res) => {
        res.render('forbidden')
    },
    logIn: (req,res) => {
        res.render('logIn')
    },
    profile:function (req,res) {
        let user = req.session.user
        db.User.findAll()
        .then(function(users){
            res.render('userProfile',{users:users}) 
        })
    }, 

}

module.exports = userController;
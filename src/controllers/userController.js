const path = require('path');
let ejs = require(('ejs'));
const fs = require('fs');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const rememberMiddleware = require('../middleware/rememberMiddleware');
const db = require("../../database/models");
const { response } = require('express');



const userController = {
    login: (req,res) => {
        // VALIDACIONES
        let errorsLogin = validationResult(req);
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(userInDB){
            if(errorsLogin.isEmpty()){
                if(userInDB){
                    if(bcrypt.compareSync(req.body.password, userInDB.password)){
                        // var userALoguearse = userInDB;
                        req.session.userLogueado = userInDB;
                        
                        if (req.body.remember != undefined){
                            res.cookie("remember", req.body.email, { maxAge: 600000000});
                        }
                        res.redirect("/")
                        }else{
                        return res.render('loginRegister', {errorsLogin: [{
                            msg: "Credenciales invalidas"}]});
                        }
                }else{
                    res.render("loginRegister", {errorsLogin: {
                    msg: "No hay un usuario registrado con este email, registrese!"}})
                }
    
    }else{
             return res.render('loginRegister', {errorsLogin: errorsLogin.errors}
                 )};
         })
},


    //     if(errorsLogin.isEmpty()){
    //         for( let i=0; i<users.length; i++){
    //             if(users[i].email == req.body.email){
    //                 if(bcrypt.compareSync(req.body.password, users[i].password)){
    //                     var userALoguearse = users[i];
    //                     break;
    //                 }
    //                 return res.render('loginRegister', {errorsLogin: [{
    //                     msg: "Credenciales invalidas"}]
    //                 });
                    
    //             }}
    //         if(userALoguearse == undefined){
    //             res.render("loginRegister", {errorsLogin: {
    //             msg: "No hay un usuario registrado con este email, registrese!"}})
    //         }else{
    //             console.log(userALoguearse)
    //             req.session.userLogueado = userALoguearse;
                
    //             if (req.body.remember != undefined){
    //                 res.cookie("remember", userALoguearse.email, { maxAge: 6000000});
    //             }

    //             res.redirect("/")
            
    //         }
    //     }else{
    //         return res.render('loginRegister', {errorsLogin: errorsLogin}
    //         )};
    // },
 
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
                }} else { console.log("entro abajo")
                    return res.render('loginRegister', {errorsRegister: errorsRegister.errors}
                )}
                    
                    
    })},
    logOut: (req,res) => {
        req.session.destroy();
        res.cookie("remember", req.body.email, { expires: new Date(Date.now() - 1000)})
        return res.render('logOut')
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
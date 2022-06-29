const path = require('path');
let ejs = require(('ejs'));
const fs = require('fs');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const rememberMiddleware = require('../middleware/rememberMiddleware');


const usersPathFile =path.join(__dirname, "../data/user.json");
const users = JSON.parse(fs.readFileSync(usersPathFile, 'utf-8'));


const userController = {
    login: (req,res) => {
        // VALIDACIONES
        let errorsLogin = validationResult(req);
        // console.log(errorsLogin);
        // console.log(users);
        // console.log(req.body);
        if(errorsLogin.isEmpty()){
            for( let i=0; i<users.length; i++){
                if(users[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.password, users[i].password)){
                        var userALoguearse = users[i];
                        break;
                    }
                    return res.render('loginRegister', {errorsLogin: [{
                        msg: "Credenciales invalidas"}]
                    });
                    
                }}
            if(userALoguearse == undefined){
                res.render("loginRegister", {errorsLogin: {
                msg: "No hay un usuario registrado con este email, registrese!"}})
            }else{
                console.log(userALoguearse)
                req.session.userLogueado = userALoguearse;
                
                if (req.body.remember != undefined){
                    res.cookie("remember", userALoguearse.email, { maxAge: 600000});
                }

                res.redirect("/")
            
            }
        }else{
            return res.render('loginRegister', {errorsLogin: errorsLogin}
            )};
    },
    check: (req,res) => {
        res.send("el usuario logueado es "+ req.session.userLogueado.email);
        console.log(userALoguearse)
    } ,

    loginRegister: (req,res) => {
        res.render('loginRegister')
    },

    register: (req,res) => {
        let userInDB = users.find (user => user.email == req.body.email)
        console.log(userInDB)

        if (userInDB != undefined){
            return res.render('loginRegister',{
                errorsDB:  {
                    email: {
                        msg:'Este email ya está registrado'
                    }
                },
                old : req.body,
            }) ;     
    }
        // Validacion de datos 
        let errors = validationResult(req)
        // console.log(req.body)
        if(errors.isEmpty()){
        //Creación del usuario
        let image;
        if(req.files[0] !=undefined){
            image = req.files[0].filename
        }else{
            image = "default-avatar.jpg"
        }
        let newUser = {
            id: users[users.length - 1].id + 1,
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: image,
        }
        users.push(newUser);
        fs.writeFileSync(usersPathFile, JSON.stringify(users, 'utf-8'));
        res.redirect('/')
    } else {
        console.log(errors)
       res.render('loginRegister', {
                errors: errors.array(),
                old: req.body,
         }) 
    }
    }

}

module.exports = userController;
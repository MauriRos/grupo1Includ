const path = require('path');
const fs = require('fs');
const db = require("../../database/models");

function rememberMiddleware(req, res, next) {
    
    if (req.cookies.remember != undefined && req.session.userLogueado == undefined ) {
        db.User.findOne({
            where: {
                email: req.cookies.email
            }
        })
        .then(function(userInDB){
        if(userInDB){
            var userALoguearse = userInDB;
                
        }
        req.session.userLogueado = userALoguearse;
        res.locals.userLogueado = req.session.userLogueado;
        ;
    }); 
            next()
        }
}

module.exports = rememberMiddleware;
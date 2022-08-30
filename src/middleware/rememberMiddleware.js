const path = require('path');
const fs = require('fs');
const db = require("../../database/models");

function rememberMiddleware(req, res, next) {
    
    if (req.cookies.remember != undefined && req.session.userLogueado == undefined ) {
        db.User.findOne({
            where: {
                email: req.cookies.remember
            }
        })
        .then(function(userInDB){
        if(userInDB){
            var userLogueado = userInDB;
                
        }
        if(req.session){
        req.session.userLogueado = userLogueado;
        res.locals.userLogueado = req.session.userLogueado;
        };
    }); 
};
next()
}

module.exports = rememberMiddleware;
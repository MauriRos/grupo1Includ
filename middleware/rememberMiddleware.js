const path = require('path');
const fs = require('fs');
const usersPathFile =path.join(__dirname, "../src/data/user.json");
const users = JSON.parse(fs.readFileSync(usersPathFile, 'utf-8'));

function rememberMiddleware(req, res, next) {
    
    if (req.cookies.remember != undefined && req.session.userLogueado == undefined ) {
        for( let i=0; i<users.length; i++){
            if(users[i].email == req.cookies.remember){
                
                var userALoguearse = users[i];
                break;
                
            }
        } 
        req.session.userLogueado = userALoguearse;
    }
    next();    
}

module.exports = rememberMiddleware;
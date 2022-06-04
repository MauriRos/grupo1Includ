const path = require('path');
let ejs = require(('ejs'));
const fs = require('fs');

const usersPathFile =path.join(__dirname, "../data/user.json");
const users = JSON.parse(fs.readFileSync(usersPathFile, 'utf-8'));


const userController = {
    loginRegister: (req,res) => {
        res.render('loginRegister')
    },
    register: (req,res) => {
        let image;
        console.log(req.files);
        if(req.files[0] !=undefined){
            image = req.files[0].filename
        }else{
            image = "default-avatar.jpg"
        }
        let newUser = {
            id: users[users.length - 1].id + 1,
            ...req.body,
            avatar: image,
        }
        users.push(newUser);
        fs.writeFileSync(usersPathFile, JSON.stringify(users, 'utf-8'));
        res.redirect('/')
    }

}

module.exports = userController;
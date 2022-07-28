const locals = (req,res,next) => {
    res.locals.userLogged = false;
    if(req.session.userLogueado){
        console.log("entro");
        res.locals.userLogged = true;
        res.locals.userLogueado = req.session.userLogueado
    }
    console.log("no entro")
    next();
}
module.exports = locals;
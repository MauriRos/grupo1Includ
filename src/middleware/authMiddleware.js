function authMiddleware(req,res,next){
	if (req.session.userLogueado != undefined ) {
		next();
	} else {
		res.render('LogIn')
	}
}

module.exports = authMiddleware;
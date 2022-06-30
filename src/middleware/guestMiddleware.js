function guestMiddleware(req,res,next){
	if (req.session.userLogueado == undefined ) {
		next();
	} else {
		res.render("logOut")
	}
}

module.exports = guestMiddleware;
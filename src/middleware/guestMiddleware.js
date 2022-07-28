function guestMiddleware(req,res,next){
	if (req.session.userLogueado == undefined ) {
		next();
	} else {
		res.render("forbidden")
	}
}

module.exports = guestMiddleware;
function guestMiddleware(req,res,next){
	if (req.session.userLogueado == undefined ) {
		next();
	} else {
		res.send("esta pagina es solo para invitados")
	}
}

module.exports = guestMiddleware;
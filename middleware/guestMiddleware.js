function guestMiddleware(req,res,next){
	if (req.session.usuarioLogueado == undefind ) {
		next();
	} else {
		res.send("esta pagina es solo para invitados")
	}
}

module.exports = guestMiddleware;
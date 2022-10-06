const guestMiddleware = (req, res, next) => {
    
    // Si hay un usuario logueado redirigir a la vista profile
    if(req.session.usuarioLogueado){
        return res.redirect("/users/profile");
    }
        
    // si el usuario no está logueado puede seguir normalmente
    next();
} 

module.exports = guestMiddleware;
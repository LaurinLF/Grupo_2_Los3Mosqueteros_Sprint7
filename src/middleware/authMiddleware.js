const authMiddleware = (req, res, next) => {
    
    // Si no hay ningún usuario logueado redirigir a la vista login
    if(!req.session.usuarioLogueado){
        return res.redirect("/users/login");
    }
    
    // si el usuario está logueado puede seguir normalmente
    next()
} 

module.exports = authMiddleware;
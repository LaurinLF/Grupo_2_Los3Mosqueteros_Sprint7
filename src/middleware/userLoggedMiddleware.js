//const universalModel = require("../model/universalModel");
//const userModel = universalModel("users");
const {Users} = require('../database/models');

const userLoggedMiddleware = async(req, res, next) => {

    if(req.cookies.userEmail) {
        req.session.usuarioLogueado = await Users.findOne({where: {'email' : req.cookies.userEmail}});
    }
    res.locals.estaLogueado = req.session.usuarioLogueado;

    next();

}

module.exports = userLoggedMiddleware
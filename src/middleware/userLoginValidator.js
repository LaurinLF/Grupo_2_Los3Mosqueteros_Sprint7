const { body } = require("express-validator")
//const RegExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i 

const userLoginValidator = [
	body('email')
		.notEmpty().withMessage("Tienes que escribir tu correo.").bail()
		.isEmail().withMessage("Debes escribir un correo válido."),
   
	body('password')
		.notEmpty().withMessage('Debes escribir una contraseña').bail()
		.isLength({ min: 8 }).withMessage('Debes escribir una contraseña con al menos 8 caracteres')
]

module.exports = userLoginValidator;

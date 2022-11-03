const {body} = require('express-validator');
const path= require('path')

const userEditValidation = [
    
    body('firstname').notEmpty().withMessage('Por favor ingrese su nombre.').bail()
        .isLength({ min: 2 }).withMessage("El nombre debe contener al menos 2 caracteres"),
    body('lastname').notEmpty().withMessage('Por favor ingrese su apellido.').bail()
        .isLength({ min: 2 }).withMessage("El nombre debe contener al menos 2 caracteres"),
    body('email').notEmpty().withMessage('Por favor introduzca un correo electrónico.').bail()
        .isEmail().withMessage("El formato de correo no es válido"),
    body('password').custom((value, {req})=>{
        if (req.body.password && value.length <= 3 ){
            throw new Error ('La contraseña debe contener 4 caracteres como mínimo')
        }
        return true;
    }),
    body('checkpassword').custom((value, {req})=> {
        if(req.body.password && value != req.body.password) {
            throw new Error('Las contraseñas no coinciden')
        }
        return true;
    }),

    body("avatar")
    .custom((value, { req }) => {

        const { file } = req;

        if(file){
            const extensionesValidas = [".png", ".jpg", ".jpeg", ".svg", ".GIF"];

            const fileExtension = path.extname(file.originalname);

            if(!extensionesValidas.includes(fileExtension)){
                throw new Error(`Los formatos de imagen validos son ${extensionesValidas.join(', ')}`);
            }
        }   
        
        return true; 
    })


]

module.exports = userEditValidation;
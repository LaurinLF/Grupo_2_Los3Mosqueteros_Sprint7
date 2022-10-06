const { body } = require("express-validator");

const path = require("path");

const productCreateValidation = [
    body('name')
        .notEmpty().withMessage("No puede estar el campo vacio").bail()
        .isLength({ min: 5 }).withMessage('Debes escribir un nombre de producto con al menos 5 caracteres'),
   
	body('price')
        .notEmpty().withMessage("No puede estar el campo vacio"),

    body('discount')
    .notEmpty().withMessage("No puede estar el campo vacio"),
        
	body("id_category")
        .notEmpty().withMessage("Debe seleccionar una categoría"),

    body("id_color")
        .notEmpty().withMessage("Debe seleccionar un color"),

	body('description')
        .notEmpty().withMessage('Debe escribir una descripción').bail()
	    .isLength({ min: 20 }).withMessage('Debe escribir como mínimo 20 letras o caracteres'),

    body("measures")
        .notEmpty().withMessage('Debe escribir las medidas').bail(),

	body("image")
        .custom((value, {req}) => {
            // const files = req.files; // La linea de abajo hace lo mismo
            const { files } = req;
	
            if(files.length === 0){
               throw new Error("Debes subir al menos una imagen");
            }
                
            const extensionesValidas = [".png", ".jpg", ".jpeg", "svg", ".GIF"];

            files.forEach( file => {
                const fileExtension = path.extname(file.originalname)
                if(!extensionesValidas.includes(fileExtension)){
                    throw new Error(`Los formatos de imagen validos son ${extensionesValidas.join(', ')}`);
                }
            })
            
            return true; 
        }),	
]

module.exports = productCreateValidation;
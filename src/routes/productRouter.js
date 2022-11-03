const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController")

const multerMiddleware = require('../middleware/middlemulter');
const upload = multerMiddleware('/images/products', 'Product');
const authMiddleware = require("../middleware/authMiddleware");
const productCreateValidation = require('../middleware/productCreateValidation');
const productEditValidation = require('../middleware/productEditValidation');


// brinda lo visualización de los productos
router.get("/", productController.listadoProductos)
// brinda lo visualización de la creacion de los productos
router.get("/create",productController.create)
// Realiza el posteo de lo que proviene del metodo store/guardar del controlador, con le verificacion previa del middleware productCreateValidation
router.post('/', upload.array("image"), productCreateValidation , productController.store);
// brinda lo visualización del detalle del producto segun el id brindado en la URL, creando una ruta parametrizada
router.get("/detalle/:id", productController.detail)
router.get("/productCart", productController.carrito)
// Brinda al visual para editar un producto, siempre y cuando el usuario este logueado con el AdminUser
router.get("/edit/:id", authMiddleware,productController.edit)
// Permite el update gracias a Put (cambio especifico) para editar un producto, siempre y cuando el usuario este logueado con el AdminUser
router.put('/edit/:id', authMiddleware, upload.array("image"), productEditValidation, productController.update); 

router.delete('/delete/:id', productController.destroy); 

router.get('/search', productController.search);


module.exports = router
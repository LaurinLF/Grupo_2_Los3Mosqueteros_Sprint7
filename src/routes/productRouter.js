const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController")

const multerMiddleware = require('../middleware/middlemulter');
const upload = multerMiddleware('/images/products', 'Product');
const authMiddleware = require("../middleware/authMiddleware");
const productCreateValidation = require('../middleware/productCreateValidation');
const productEditValidation = require('../middleware/productEditValidation');



router.get("/", productController.listadoProductos)

router.get("/create",productController.create)

router.post('/', upload.array("image"), productCreateValidation , productController.store);

router.get("/detalle/:id", productController.detail)

router.get("/productCart", productController.carrito)

router.get("/edit/:id", authMiddleware,productController.edit)
router.put('/edit/:id', authMiddleware, upload.array("image"), productEditValidation, productController.update); 

router.delete('/delete/:id', productController.destroy); 


module.exports = router
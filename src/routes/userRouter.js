const express = require("express");
const router = express.Router();


// Controllers
const userController = require("../controllers/userController")

// Middleware - multer
const multerMiddleware = require('../middleware/middlemulter');
const upload = multerMiddleware('users', 'User');

// Express-Validator
const userRegisterValidator = require("../middleware/userRegisterValidator");
const userLoginValidator = require("../middleware/userLoginValidator");

// AuthMiddleware y GuestMiddleware
const authMiddleware = require("../middleware/authMiddleware");
const guestMiddleware = require("../middleware/guestMiddleware");

// rutas para registrar usuarios
router.get("/register", guestMiddleware, userController.register)
router.post('/register', upload.single("avatar"), userRegisterValidator, userController.processRegister);

// rutas para login de usuarios
router.get("/login", guestMiddleware, userController.login)
router.post('/login', userLoginValidator, userController.processLogin);

// Perfil de Usuario
router.get('/profile/', authMiddleware, userController.profile);

//Logout
router.get('/logout/', userController.logout);


module.exports = router
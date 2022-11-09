

const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');


//Asignar una ruta al home
router.get('/', mainController.index);

//Asignar una ruta al home
router.get('/home', mainController.index);

//Asignar una ruta al home
router.get('/index', mainController.index);

//Asignar una ruta al register
router.get('/register', mainController.register);

//Asignar una ruta al login
router.get('/login', mainController.login);

//Si queres responder con un ERROR 404 o Not Found. Va al final
router.get('*', mainController.notFound);


//Exporto las rutas
module.exports = router;


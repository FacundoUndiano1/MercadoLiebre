
//Requerir paquetes express y path
const express = require('express');
const app = express();
const path = require('path'); 

// // ////////////////////////////////////////////
//Hago pública la carpeta public
const publicPath = path.resolve(__dirname, './public');
//Para usar carpetas estáticas
app.use(express.static(publicPath));
//////////////////////////////////////////////////
//Abriendo puerto 3000
let PORT = process.env.PORT || 3000; //El web hosting le da un puerto a tu proyecto, sino toma el puerto 3000
app.listen(PORT, () => {
  console.log('servidor corriendo en puerto ' + PORT);
});

//////////////////////////////////////////////////

//Asignar una ruta al home
app.get('/', (req, res) => { //home
  res.sendFile(path.resolve(__dirname, './views/home.html'));
});

//Asignar una ruta al home
app.get('/home', (req, res) => { //home
  res.sendFile(path.resolve(__dirname, './views/home.html'));
});

//Asignar una ruta al home
app.get('/index', (req, res) => { //home
  res.sendFile(path.resolve(__dirname, './views/home.html'));
});

//Asignar una ruta al register
app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/register.html'));
});

//Asignar una ruta al login
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});

//Si queres responder con un ERROR 404 o Not Found. Va al final
app.get('*', (req, res) => {
  res.status(404).send('Esta mal la ruta absoluta pibe');
});
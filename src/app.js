
//Requerir paquetes express y path
const express = require('express');
const app = express();
const mainRouter = require('./routers/mainRouter');
const path = require('path');

// // ////////////////////////////////////////////
//Abriendo puerto 3000
let PORT = process.env.PORT || 3030; //El web hosting le da un puerto a tu proyecto, sino toma el puerto 3030
app.listen(PORT, () => {
  console.log('servidor corriendo en puerto ' + PORT);
});
//////////////////////////////////////////////////
//Hago pública la carpeta public
const publicPath = path.resolve(__dirname, './public');
//Para usar carpetas estáticas
app.use(express.static('public'));
//////////////////////////////////////////////////

app.use('/', mainRouter)

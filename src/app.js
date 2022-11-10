
const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routers/mainRouter');

// // ////////////////////////////////////////////
//Abriendo puerto
let PORT = process.env.PORT || 3000; //El web hosting le da un puerto a tu proyecto, sino toma el puerto 3030
app.listen(PORT, () => {
  console.log('servidor corriendo en puerto ' + PORT);
});
//////////////////////////////////////////////////
//Para usar carpetas estáticas
app.use(express.static(path.resolve(__dirname,'../public')));
//////////////////////////////////////////////////

app.use('/', mainRouter); //Todas las rutas que empiecen con / van a ser respondidas por mainRouter

//Template engine
app.set('view engine', 'ejs');

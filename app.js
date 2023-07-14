
const express = require('express'); //Requerir paquete express
const path = require('path'); //Requerir el paquete path
const dotenv = require('dotenv').config();

const app = express(); //Usar el paquete express a traves de path

const publicPath = path.join(__dirname, './public'); //Hacer publicos los archivos de la carpeta public
app.use(express.static(publicPath));



app.get('/', (req, res) => 
res.sendFile(path.join(__dirname, './views/index.html')));

app.get('/home', (req, res) => 
res.sendFile(path.join(__dirname, './views/index.html')));  

app.get('/index', (req, res) => 
res.sendFile(path.join(__dirname, './views/index.html')));  //Home con 3 opciones

app.get('/register', (req, res) => 
res.sendFile(path.join(__dirname, './views/register.html')));    

app.get('/login', (req, res) => 
res.sendFile(path.join(__dirname, './views/login.html')));  

app.get('/cart', (req, res) => 
res.sendFile(path.join(__dirname, './views/cart.html')));    

app.get('/discounts', (req, res) => 
res.sendFile(path.join(__dirname, './views/discounts.html')));

app.get('/officialstores', (req, res) => 
res.sendFile(path.join(__dirname, './views/officialStores.html')));  

app.get('/sell', (req, res) => 
res.sendFile(path.join(__dirname, './views/sell.html')));   

app.get('/help', (req, res) => 
res.sendFile(path.join(__dirname, './views/help.html')));   





app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT); //Levantar el servidor
});

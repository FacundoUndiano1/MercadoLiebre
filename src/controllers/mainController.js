
//Contiene la logica de negocio y la ejecucion
const path = require('path'); 

const mainController = {

  //Index
  index: (req, res) => {
    res.render('index');
  },

  //Register
  register: (req, res) => {
    res.render('register');
  },
  
  //Login
  login: (req, res) => {
    res.render('login');
  },

  //NotFound
  notFound: (req, res) => { 
    res.status(404).send('Esta mal la ruta absoluta pibe');
  }

}

//Exporto controllers
module.exports = mainController;
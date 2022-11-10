
//Contiene la logica de negocio y la ejecucion
const path = require('path'); 

const mainController = {

  //Index
  index: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
  },

  //Register
  register: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/register.html'));
  },
  
  //Login
  login: (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/login.html'));
  },

  //NotFound
  notFound: (req, res) => { 
    res.status(404).send('Esta mal la ruta absoluta pibe');
  }

}

//Exporto controllers
module.exports = mainController;
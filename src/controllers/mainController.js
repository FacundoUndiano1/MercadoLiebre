
const path = require('path'); 

const mainController = {

  index: (req, res) => { //Home
    res.sendFile(path.resolve(__dirname, '../views/index.html'))
  },

  register: (req, res) => { //Register
    res.sendFile(path.resolve(__dirname, '../views/register.html'))
  },

  login: (req, res) => {  //Login
    res.sendFile(path.resolve(__dirname, '../views/login.html'))
  },

  notFound: (req, res) => { //NotFound
    res.status(404).send('Esta mal la ruta absoluta pibe')
  }

}

module.exports = mainController;
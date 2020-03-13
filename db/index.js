const {Sequelize} = require ('sequelize');

module.exports = new Sequelize('gallery', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

//to test the connection
// db.authenticate()
//   .then(() => console.log('Database Connected'))
//   .catch(() => console.log('Error connecting to database'));
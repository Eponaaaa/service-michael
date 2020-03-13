const {Sequelize} = require ('sequelize');

const db = new Sequelize('gallery', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

const Photos = db.define('photos', {
  url0: Sequelize.text,
  url1: Sequelize.text,
  url2: Sequelize.text,
  url3: Sequelize.text,
  url4: Sequelize.text,
  url5: Sequelize.text,
  url6: Sequelize.text,
  url7: Sequelize.text,
  url8: Sequelize.text,
  url9: Sequelize.text,
});

//to test the connection
db.authenticate()
  .then(() => console.log('Database Connected'))
  .catch(() => console.log('Error connecting to database'));

module.exports.db = db;
module.exports.photos = Photos;
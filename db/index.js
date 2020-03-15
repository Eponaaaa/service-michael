const Sequelize = require ('sequelize');

const db = new Sequelize('gallery', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

const Photos = db.define('photos', {
  url0: Sequelize.TEXT,
  url1: Sequelize.TEXT,
  url2: Sequelize.TEXT,
  url3: Sequelize.TEXT,
  url4: Sequelize.TEXT,
  url5: Sequelize.TEXT,
  url6: Sequelize.TEXT,
  url7: Sequelize.TEXT,
  url8: Sequelize.TEXT,
  url9: Sequelize.TEXT,
});

db.sync();

//to test the connection
db.authenticate()
  .then(() => console.log('Database Connected'))
  .catch(() => console.log('Error connecting to database'));

module.exports = db;
const express = require('express');
const bodyparser = require('body-parser');
const db = require('../db/index.js');
const Sequelize = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendStatus(200);
});

//currently gets and returns all rows of the database. It's only returning file names, not the full path.
app.get('/photos', (req, res) => {
  db.Photos.findAll()
    .then(item => {
      res.json(item);
    })
    .catch(err => console.log(err));
});

app.listen(PORT, console.log(`Server listening on ${PORT}`));
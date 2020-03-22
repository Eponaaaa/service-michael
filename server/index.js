const express = require('express');
const bodyparser = require('body-parser');
const db = require('../db/index.js');
const Sequelize = require('sequelize');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(cors());

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.get('/photos/:id', (req, res) => {
  db.Photos.findAll({where: {id: req.params.id}})
    .then(item => {
      res.json(item);
    })
    .catch(err => console.log(err));
});

app.listen(PORT, console.log(`Server listening on ${PORT}`));
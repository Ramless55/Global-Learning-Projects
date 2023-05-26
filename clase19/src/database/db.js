const mongoose = require('mongoose');
const Fruit = require('../models/fruitModel.js');

mongoose
    .connect('mongodb://localhost/fruits')
    .then(() => console.log('Base de datos conectada'))
    .catch((err) => console.log('No se pudo conectar con la base de datos'));
// module.exports = mongoose;
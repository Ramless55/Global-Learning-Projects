const express = require('express');
//lleva mayuscula por que sera una clase para crear objetos.
const Fruit =require('./models/fruitModel')
const fruitsRouter = require('./routes/fruitsRouter')(Fruit);

const app = express();

require('./database/db')

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', fruitsRouter)

app.listen(5000, () => {
    console.log('Server is running! :D')
});
const express = require('express');
const app = express();

const fruits = ['manzana', 'pera', 'banana']

app.get('/fruits', (req, res) => {
    res.status(200).send(fruits)
});

server.listen(5000, () => {
    console.log('Server is running...');
});



// const fs = require('fs');

// const directory = './package.json'

// const data = fs.readFileSync(directory);

// console.log('El archivo contiene: ', data.readFile);

// try{
//     console.log(hola);
// } catch (error){
//     console.log(error.name)
// }
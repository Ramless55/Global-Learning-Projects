const minSum = [7, 1, 4, 2];

const minor = (array) =>{
    let min = Math.min(...array);
    let index1 = array.indexOf(min);
    array.splice(index1, 1);

    let min2 = Math.min(...array);

    return console.log(`La suma entre los menores numeros del array es: ${min + min2}`);
}

minor(minSum);
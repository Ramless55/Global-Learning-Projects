//variables
const array = [1,23,43,54,65,21];

const eliminate = (arrayEliminator) =>{
    arrayEliminator.shift();
    return arrayEliminator.length;
}

console.log(`Tu array tiene ${array.length} espacios, ahora tiene: ${eliminate(array)}`);

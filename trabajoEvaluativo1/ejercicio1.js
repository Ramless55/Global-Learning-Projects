const test1 = [2,1,3], test2 = [23,7,19], test3 = [1,2,4], test4 = [-1,1,0], test5 = [-7,-345,0];

const mediumNumber = (array) => {
    let minimum = Math.min(...array);
    let maximum = Math.max(...array);
    //findIndex me devuelve el index del elemento que cumpla la condicion.
    let medium = array.findIndex((x) => x > minimum && x < maximum);
    return medium;
}

console.log(`La posicion del valor del medio es: ${mediumNumber(test1)}\n`);
console.log(`La posicion del valor del medio es: ${mediumNumber(test2)}\n`);
console.log(`La posicion del valor del medio es: ${mediumNumber(test3)}\n`);
console.log(`La posicion del valor del medio es: ${mediumNumber(test4)}\n`);
console.log(`La posicion del valor del medio es: ${mediumNumber(test5)}`);

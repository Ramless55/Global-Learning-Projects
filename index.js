const test1 = [2,1,3], test2 = [23,7,19], test3 = [1,2,4], test4 = [-1,1,0], test5 = [-7,-345,0];

const compare = (array) => {
    let arrayCopy = array.map((item) => item);
    const compararSort = (a,b) => a-b;
    arrayCopy = arrayCopy.sort(compararSort);
    console.log(arrayCopy)
    return array.indexOf(arrayCopy[1]);
}
console.log(compare(test1));
console.log(compare(test2));
console.log(compare(test3));
console.log(compare(test4));
console.log(compare(test5));
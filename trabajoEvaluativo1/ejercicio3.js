const test1 = [1, 1, 1, 1, 1, 3, 4, 2, 2, 2, 2, 1, 1, 1], testSecondary1 = [1, 2];
const test2 = [-2, 0, 0, 0, -2, 3, 4, 1] , testSecondary2 = [-2, 0, 4];
const test3 = [0, 1, 2, 3, 4, 5] , testSecondary3 = [ ];
const test4 = [1, 1, 1, 2, 2, 2, 3, 3, 3] , testSecondary4 = [4, 5, 6];
const test5 = [1, 2], testSecondary5 = [1, 1, 1, 1, 1, 3, 4, 2, 2, 2, 2, 1, 1, 1];

const remainingNumbers = (array1, array2) => {

    //el .filter filtra todo lo del array 1 que NO este incluido (.includes) en el array 2
    let restArray = array1.filter((x) => !array2.includes(x));
    return restArray;
}

console.log(remainingNumbers(test1,testSecondary1));
console.log(remainingNumbers(test2,testSecondary2));
console.log(remainingNumbers(test3,testSecondary3));
console.log(remainingNumbers(test4,testSecondary4));
console.log(remainingNumbers(test5,testSecondary5));


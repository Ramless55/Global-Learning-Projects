const array1 = [2,1,3], array2 = [23,7,19], array3 = [1,2,4], array4 = [-1,1,0], array5 = [-7,-345,0];

console.time('prueba');
const medium = (array) => {
    let mediumNumber;
    //verifico si el del medio esta en el index 1
    if((array[0] > array[1] && array[2] < array[1]) || (array[0] < array[1] && array[2] > array[1]))
        mediumNumber = 1;
    else {
        //verifico en que extremo esta el del medio en el caso de que que el mayor este en el index 1
        if(array[0] > array[2]){
            if(array[2]<array[1])
                mediumNumber = 0;
            else
                mediumNumber = 2;
        //verifico en que extremo esta el del medio en el caso de que que el menor este en el index 1
        }else{
            if(array[1] > array[0])
                mediumNumber = 2;
            else
                mediumNumber = 0;
        }
    }
    return console.log(`El numero del medio esta en la posicion: ${mediumNumber}`);   
}

medium(array1);
console.log(``)
medium(array2);
console.log(``)
medium(array3);
console.log(``)
medium(array4);
console.log(``)
medium(array5);

console.timeEnd('prueba');
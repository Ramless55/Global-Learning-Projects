const array = [1,2,3,4,5,6,7,8,9];
const array2 = [1,2,3,4,5];

const lastThree = (arrayEliminator) =>{
    if(arrayEliminator.length < 6){
     console.log(`No se aceptan arrays de menos de 6 elementos, que flashas papa`);
    } else{
        let num1 = arrayEliminator.length - 3;
        arrayEliminator.splice(num1, 3);
        console.log(arrayEliminator);
    }
}

lastThree(array);
lastThree(array2);
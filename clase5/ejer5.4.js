let num1 = 5;

const arrayCreator = (number) =>{
    const array = [];

    for(let i = 0; i < number; i++){
        array.push(i+1);
    }
    return array;
}

console.log(arrayCreator(num1));

const array = [1,2,3,4,5];
let num = 2;

const addition = (array, number) =>{
   array.forEach((i,index) => array[index] = i + number);
   return array;
}

console.log(addition(array, num));
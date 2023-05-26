const unevenCouple=(num)=>{
    let txt;
    if(num%2==0){
        txt = 'par';
    }else{
        txt = 'impar';
    }
    return txt; 
}

let number=2;
let number2=3;

console.log(`El numero ingresado (${number}) es: ${unevenCouple(number)}`);
console.log(`El numero ingresado (${number2}) es: ${unevenCouple(number2)}`);
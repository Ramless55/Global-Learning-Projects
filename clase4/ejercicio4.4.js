const skip=(num)=>{
    for(let i = 1; i < 11; i++){
        if(i==num){
            continue;
        }else{
            console.log(`${i}`);
        }
    }
}

let number=8;

if(number>0 && number<11){
    skip(number);
}else{
    console.log(`El numero debe ser de 1 a 10, tu numero: (${number}) es diferente.`);
}
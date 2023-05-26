const opposed=(num)=>{
    let final;
    if(num>0){
        final = -num;
    }else{
        final= Math.abs(num);
    }
    return final;
}

let number=-4;

if(number==0){
    console.log(`El numero 0 no puede cambiar su simbolo`);
}else{
    console.log(`Tu numero es: ${number} el numero contrario es: ${opposed(number)}`);
}

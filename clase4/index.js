const myFunction = (number) => {
    let number2 = 10;
  
    if(number2 <= (12 - 2) && number === '5'){
      return 3;
      console.log('hi');
    }
    else {
      return 4;
    }
    return 5;
  }
  
  console.log(`${myFunction(6)},${myFunction(5)},${myFunction('5')}`);
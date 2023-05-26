const adjacentElementsProduct = [9, 5, 10, 2, 24, -1];

const product = (array) => {
    length = array.length-1;
    newArray = array.map((x,i) => x * array[i+1] );
    newArray.pop();
    result = Math.max(...newArray);

    return console.log(`El mayor producto posible es: ${result}`);
}

product(adjacentElementsProduct);
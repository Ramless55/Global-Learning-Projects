let test1 = "Bienvenidos a Global Learning 2022";
let test2 = "Este texto pasó la prueba de la función";
let test3 = "Oh no, ahora el texto tiene comas, cuidado";
let test4 = "Pera, limón, higo, manzana, durazno, uva, palta, lima, banana" ;
let test5 = "¿Un desafío? ...cuidado con los signos!";

const stringDivider = (sentence, number) => {
    //Expresion regular que tiene en cuenta todo lo que no sea numeros y letras.
    let symbols1 = new RegExp('[^0-9a-zA-Z\\sñÑüéáíóúÁÉÍÓÚÜ]','g');

    //Elimino todos los simbolos de la frase y luego la separo con .split.
    let sentenceClean = sentence.replace(symbols1, '');
    let sentenceArray = sentenceClean.split(' ');

    let wordsArray = sentenceArray.filter((x) => x.length > number);
    return wordsArray;
}

console.log(stringDivider(test1,6),`\n`);
console.log(stringDivider(test2,3),`\n`);
console.log(stringDivider(test3,2),`\n`);
console.log(stringDivider(test4,4),`\n`);
console.log(stringDivider(test5,5));
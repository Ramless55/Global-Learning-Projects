
const findUniq = [2, 2, 2, 2, 3, 2, 2, 2, 2];
const findUniq2 = [2, 2, 3];

const seeker = (array) => {
    let length = array.length, impostor = 0;

    if(array[0] === array[length-1])
        impostor = array.find((x) => x !== array[0]);

    else if(array[0] === array[1])
        impostor = array[length-1];

    else impostor = array[0];

    return console.log(`El impostor numero ${impostor} a sido detectado.`);
}

seeker(findUniq);
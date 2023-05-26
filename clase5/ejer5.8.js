const array = ['wolf', 'sheep', 'sheep', 'sheep', 'sheep'];

const sheepKiller = (array) => {
    let length = array.length-1;
    let wolfPosition = array.indexOf('wolf');
    const arrayCont = [];
    for(let i = 0; i <=length; i++){
        arrayCont.push(i+1)
    }
    arrayCont.reverse();

    for(let x = wolfPosition; x<=length; x++){
        
        if(x === wolfPosition){
            if(wolfPosition === length){
                console.log(`Lobo no hay comida`);
                break;
            }else{
                console.log(`Oveja numero ${arrayCont[x+1]} cuidado el lobo ya viene`);
                continue;
            }
        }

        array.splice(arrayCont[x-1],1);
        console.log(array);
        console.log(`La oveja numero ${arrayCont[x]} ha sido comida`)

        if(x === length){

            if(array[arrayCont[x]]!== 'wolf'){
                array.splice(arrayCont[x],1);
                console.log(array);
                console.log(`Lobo ya no comas mas ovejas`)
            }else{
                console.log(`Lobo ya no comas mas ovejas`)
            }

        }else{
            console.log(`Oveja numero ${arrayCont[x+1]} cuidado el lobo ya viene`);

        }
    }

    
}

sheepKiller(array);
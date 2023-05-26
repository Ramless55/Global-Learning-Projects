class Hero{
    constructor(name, position = 0){
        this.name = name;
        this.position = position;
        this.life = 100;
        this.damage = 5;
        this.experience = 0;
    }
}

const heroCreator = (name, position) => {
    const newHero = new Hero(name, position);
    return newHero;
}
let array = []; 
length =array.length
array.push(heroCreator('Darius'));
array.push(heroCreator('Garen', ++length));
array.push(heroCreator('Akali', ++length));
array.push(heroCreator('Teemo', ++length));

console.table(array);
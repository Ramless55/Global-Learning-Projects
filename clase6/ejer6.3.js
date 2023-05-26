const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
  
const greetings = (arrayObjet) => {
    let array = arrayObjet.map(item=>item)
    array.forEach((person) => person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`);
    return array;
}

console.table(greetings(list));
const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Java' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Python' } 
  ];

const languageBrowser = (arrayObject) => {
    newArrayObject = arrayObject.map(item => item);
    return newArrayObject.every((person) => person.language === arrayObject[0].language);
}

console.log(languageBrowser(list));
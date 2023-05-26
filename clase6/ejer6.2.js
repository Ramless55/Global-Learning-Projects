const list = [
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Europe', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
]

const europeanBrowser = (array) => {
    let arrayFilter = array.filter((x) => x.continent === 'Europe');
    return arrayFilter.length;
}

console.log(`La cantidad de personas de europa que asistieron fueron: ${europeanBrowser(list)}`);
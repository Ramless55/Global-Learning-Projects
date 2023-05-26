const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];

const languageFinder = (arrayObjet, languageParameter) => {
    let bool = arrayObjet.some((person) => person.language === languageParameter);
    return bool;
}

console.table(languageFinder(list, 'Ruby'));
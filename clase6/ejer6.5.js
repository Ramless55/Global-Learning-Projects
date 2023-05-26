const list = [
    { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
  ];

const languageFinder = (arrayObjet, languageParameter) => {
    let developer = arrayObjet.find((person) => person.language === languageParameter);

    return Boolean(developer) ?
        console.log(`${developer.firstName} from ${developer.country} was the first ${developer.language} developer in the conference`)
        : console.log(`There are no ${languageParameter} developers in the conference`);

}

languageFinder(list, 'Python');
languageFinder(list, 'C#');

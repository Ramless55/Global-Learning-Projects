const list = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];

const userNameGenerator = (arrayObject) => {
    let newArrayObject = arrayObject.map(item=>item)
    let year = new Date();
    year = year.getFullYear();

    newArrayObject.forEach((person) => {
        let user = person.firstName + person.lastName + (year - person.age);
        user = user.toLowerCase();
        user = user.replace('.', '')
        person.userName = user;
    });

    return newArrayObject;
}

console.table(userNameGenerator(list));
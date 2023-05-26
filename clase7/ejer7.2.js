const list = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ];

  const older = (arrayObject) => {
        newArrayObject = arrayObject.map(item => item);
        let ages = newArrayObject.map(person => person.age);
        let max = Math.max(...ages);
        let old = newArrayObject.filter((person) => max === person.age);
    return old;
  }

console.table(older(list));
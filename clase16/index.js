window.addEventListener('DOMContentLoaded', () => {
    console.log('La pagina fue cargada');

    const myButton = document.querySelector('#button-1');
    const buttonRead = document.querySelector('#button-2');
    const title = document.querySelector('h1');
    const text = document.querySelector('.paragraph');

    myButton.addEventListener('click', () => {
        const dog = {
            name: 'Firulais',
            breed: 'Puro Perro',
            age: 'Old'
        }

        text.innerText = "Texto modificado por click.";
        
        window.localStorage.setItem('myDog', JSON.stringify(dog));

        const url = window.location.href.replace('index.html', 'otro.html');
        window.location.href =  url;
    })

    buttonRead.addEventListener('click', () => {
        const read = window.localStorage.getItem('myDog');

        console.log(JSON.parse(read));
    })
});


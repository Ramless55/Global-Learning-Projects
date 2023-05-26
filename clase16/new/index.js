window.addEventListener('DOMContentLoaded', () => {
    console.log('La pagina esta cargada');

    const myForm = document.querySelector('form');
    const inputName = myForm.querySelector('#name');
    const inputPassword = myForm.querySelector('#password');
    const submitButton = myForm.querySelector('#submit');

    // event accede al evento que se hace al hacer click
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        const userData = {
            username: inputName.value,
            password: inputPassword.value
        }

        console.log(userData);
    })
})
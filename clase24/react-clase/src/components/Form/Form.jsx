import React, { Fragment, useState} from 'react'
import './Form.css'

const Form = (props) => {

    const [errorMessage, setErrorMessage] = useState(false)

    const handleInputChange = (event) => {
        props.setInfo({
            ...props.user,
            [event.target.name] : event.target.value
        })
    }

    const check = (event) => {
        event.preventDefault()
        if( (props.user.name === props.account.name) && (props.user.password === props.account.password)){
            console.log('enviando datos...' + props.user.name + ' ' + props.user.password)
            props.setError(true);
            setErrorMessage(false);

        }else{
            console.log('datos inconrrectos')
            props.setError(false);
            setErrorMessage(true);
        }
    }

  return (<Fragment>
        <main className='container'>   
            <h1>Formulario</h1>
            <p id={errorMessage ? 'error-message' : 'none'}>*Usuario invalido, vuelva a intentar</p>
            <form name='login' className='login' onSubmit={check}>
                <input name='name' type="text" className='inputLogin' placeholder='Ingrese su nombre' onChange={handleInputChange}/>
                <br />
                <input name='password' type="password" className='inputLogin' placeholder='Ingrese su nombre' onChange={handleInputChange}/>
                <br />
                <button type="submit" name="button">Enviar</button>
            </form>
        </main>
            <ul>
                <li>{props.user.name}</li>
                <li>{props.user.password}</li>
            </ul>
  </Fragment>)
}

export default Form
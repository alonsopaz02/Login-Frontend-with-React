import React from 'react';
import './LoginPasswordIncorrecto.css';
import { GoAlert } from "react-icons/go";


const LoginPasswordIncorrecto = () => {
    return (
        <div className='wrappe'>
            <div className='bloque'>
                <div><GoAlert /></div>
            </div>
            <div className='bloque2'>
                <p>El password es incorrecto</p>
                <button type='submit'>Regresar al Login</button>
            </div>

        </div>
    )
}

export default LoginPasswordIncorrecto
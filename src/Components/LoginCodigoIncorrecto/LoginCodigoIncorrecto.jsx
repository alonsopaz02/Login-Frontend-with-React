import React from 'react';
import './LoginCodigoIncorrecto.css';
import { GoAlert } from "react-icons/go";


const LoginCodigoIncorrecto = () => {
    return (
        <div className='wrappe'>
            <div className='bloque'>
                <div><GoAlert /></div>
            </div>
            <div className='bloque2'>
                <p>Código de verificación incorrecto</p>
                <button type='submit'>Regresar al Login</button>
            </div>

        </div>
    )
}

export default LoginCodigoIncorrecto
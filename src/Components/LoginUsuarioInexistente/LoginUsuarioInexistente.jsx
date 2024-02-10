import React from 'react';
import './LoginUsuarioInexistente.css';
import { GoAlert } from "react-icons/go";


const LoginUsuarioInexistente = () => {
    return (
        <div className='wrappe'>
            <div className='bloque'>
                <div><GoAlert /></div>
            </div>
            <div className='bloque2'>
                <p>El usuario no existe</p>
                <button type='submit'>Regresar al Login</button>
            </div>

        </div>
    )
}

export default LoginUsuarioInexistente
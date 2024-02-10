import React from 'react';
import './LoginUsuarioNoDisponible.css';
import { GoAlert } from "react-icons/go";


const LoginUsuarioNoDisponible = () => {
    return (
        <div className='wrappe'>
            <div className='bloque'>
                <div><GoAlert /></div>
            </div>
            <div className='bloque2'>
                <p>El usuario no está disponible.</p>
                <button type='submit'>Regresar al Login</button>
            </div>

        </div>
    )
}

export default LoginUsuarioNoDisponible
import React from 'react';
import './LoginPantallaPrincipal.css';
import { GoAlert } from "react-icons/go";


const LoginPantallaPrincipal = () => {
    return (
        <div className='wrappe'>
            <div className='bloque'>
                <div><GoAlert /></div>
            </div>
            <div className='bloque2'>
                <p>Se está tratando de vulnerar la seguridad del sistema</p>
                <button type='submit'>Regresar al Login</button>
            </div>

        </div>
    )
}

export default LoginPantallaPrincipal
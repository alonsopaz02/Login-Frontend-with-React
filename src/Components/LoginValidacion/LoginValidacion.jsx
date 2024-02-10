import React from 'react';
import './LoginValidacion.css';
import { LuAlertCircle } from "react-icons/lu";


const LoginValidacion = () => {
    return (
        <div className='wrappe'>
            <div className='bloque'>
                <div><LuAlertCircle /></div>
            </div>
            <div className='bloque2'>
                <p>El usuario o contraseña ingresados no cumplen con las características deseadas.</p>
                <button type='submit'>Regresar al Login</button>
            </div>

        </div>
    )
}

export default LoginValidacion
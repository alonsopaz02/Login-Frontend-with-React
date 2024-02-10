import React from 'react';
import './LoginUsuarioSinPrivilegio.css';
import { GoAlert } from "react-icons/go";


const LoginUsuarioSinPrivilegio = () => {
    return (
        <div className='wrappe'>
            <div className='bloque'>
                <div><GoAlert /></div>
            </div>
            <div className='bloque2'>
                <p>El usuario no posee ningún privilegio.</p>
                <button type='submit'>Regresar al Login</button>
            </div>

        </div>
    )
}

export default LoginUsuarioSinPrivilegio
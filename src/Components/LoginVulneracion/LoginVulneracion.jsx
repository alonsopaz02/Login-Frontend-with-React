import React from 'react';
import './LoginVulneracion.css';
import { GoAlert } from "react-icons/go";


const LoginVulneracion = () => {
    return (
        <div className='wrappe'>
            <div className='bloque'>
                <div><GoAlert /></div>
            </div>
            <div className='bloque2'>
                <div>
                    <p>Se está tratando de vulnerar la seguridad del sistema</p></div>
                <div>
                    <button type='submit'>Regresar al Login</button>
                </div>
            </div>

        </div>
    )
}

export default LoginVulneracion


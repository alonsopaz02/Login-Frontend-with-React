import React from 'react'
import './LoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                
                <div className="input-box">
                    <input type="text" placeholder='Usuario' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="Password" placeholder='Contraseña' required />
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label ><input type="Checkbox" />Recordar</label>
                    <a href="">Olvidaste tu contraseña?</a>

                </div>
                <button type='submit'>Iniciar Cesión</button>
            </form>
        </div>
    )
}

export default LoginForm
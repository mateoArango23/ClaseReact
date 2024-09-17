import React from 'react'
import Menu from './Menu'

function Login() {
  return (
    <div>
        <Menu></Menu>
        <div className='container'>
        <p>Inicio de Sesión</p>
        <form>
            <label htmlFor="">Usuario</label>
                <input 
                    type="text" 
                    placeholder='Ingrese el Usuario'
                    className='form-control'
                />
                <label htmlFor="">Contraseña</label>
                <input 
                    type="password" 
                    placeholder='Contraseña'
                    className='form-control'
                />
        </form>
        </div>
    </div>
  )
}

export default Login
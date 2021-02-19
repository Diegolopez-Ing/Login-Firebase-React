import React from 'react'

const Login = () => {
    return (
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <input className='form-control mt-4' placeholder='Introduce el Email' type="text"/>
                <input className='form-control mt-4' placeholder='Introduce la Password' type="password"/>
               <button className='btn btn-dark btn-block mt-4' type="submit" value='Registrar Usuarios'>Registrar Usuarios</button>
            </div>
            <div className="col"></div>
        </div>
    )
}

export default Login

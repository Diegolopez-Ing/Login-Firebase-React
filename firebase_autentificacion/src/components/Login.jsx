import React , {useState} from 'react'
import {auth} from '../firebaseConfig'

const Login = () => {
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')

    const RegistrarUsuario=(e)=>{
        e.preventDefault()
        try {
            auth.createUserWithEmailAndPassword(email,pass)
            alert('Usuario registrado')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form onSubmit={RegistrarUsuario} className='form-group'>
                    <input 
                        onChange={(e)=>{setemail(e.target.value)}}
                        className='form-control mt-4' 
                        placeholder='Introduce el Email' 
                        type="text"
                    />

                    <input 
                        onChange={(e)=>{setpass(e.target.value)}}
                        className='form-control mt-4' 
                        placeholder='Introduce la Password' 
                        type="password"
                    />
                <input 
                    className='btn btn-dark btn-block mt-4' 
                    type="submit" 
                    value='Registrar Usuarios' value='Registrar Usuarios'></input>
                 </form>
                </div>         
            <div className="col"></div>
        </div>
    )
}

export default Login

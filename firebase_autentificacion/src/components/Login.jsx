import React , {useState} from 'react'
import {auth} from '../firebaseConfig'

const Login = () => {
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const [msgerror, setmsgError] = useState(null)

    const RegistrarUsuario=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,pass)
            .then(r=>alert('Usuario registrado'))
            .catch (e => {
            // "auth/invalid-email"
            // auth/weak-password"
            if (e.code=='auth/invalid-email') {
                setmsgError('Formato de email Incorrecto')
                
            }
            if (e.code=='auth/weak-password') {
                setmsgError('La password debe tener 6 caracteres o más')
                
            }
        })
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
                        type="email"
                    />

                    <input 
                        onChange={(e)=>{setpass(e.target.value)}}
                        className='form-control mt-4' 
                        placeholder='Introduce la Password' 
                        type="password"
                        required='enable'
                    />
                <input 
                    className='btn btn-dark btn-block mt-4' 
                    type="submit" 
                    value='Registrar Usuarios' value='Registrar Usuarios'></input>
                 </form>
                 {
                     msgerror != null ? 
                     (
                         <div>
                             {msgerror}
                         </div>
                     )
                     :
                     (
                        <span></span> 
                     )
                 }
                </div>         
            <div className="col"></div>
        </div>
    )
}

export default Login

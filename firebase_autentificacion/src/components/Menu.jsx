import React,{useEffect,useState}from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../firebaseConfig'




const Menu = () => {
    const [usuario, setusuario] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user)=>{
            if(user){
                setusuario(user.email)
            }
        })
        
    }, [])

    const CerrarSesion=()=>{
        auth.signOut()
        setusuario(null)
    }

    return (
        <div>
           <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
               <ul className='navbar-nav mr-auto'>
                   <li className='nav-item'><Link to='/'>Inicio</Link></li>
                   <li><Link className='nav-link' to='/login'>Login</Link></li>
                   <li><Link className='nav-link' to='/admin'>Admin</Link></li>
               </ul>
               {
                   usuario ? 
                   (
                      <button
                      onClick={CerrarSesion}
                       className='btn btn-danger'>Cerrar Sesion</button> 
                   )
                   :
                   (
                       <span></span>
                   )
               }
           </nav>
        </div>
    )
}

export default Menu

import React from 'react'
import Inicio from './components/Inicio'
import Admin from './components/Admin'
import Login from './components/Login'
import Menu from './components/Menu'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="Container">
     <Router>
       <Menu></Menu>
       <Switch>
         <Route exact path='/' component={Inicio}></Route>
         <Route path='/admin' component={Admin}></Route>
         <Route path='/login' component={Login}></Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

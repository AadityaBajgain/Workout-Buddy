import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import {useAuthContext} from './hooks/UseAuthContext';
// pages

import Home from './pages/Home';


// Components
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Signup from './pages/signup';

const App = () => {
  const {user} = useAuthContext();
  return (
    <div className='App'>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route path="/" element={user ?<Home/>:<Navigate to='/login'/>}/>
          <Route path='/login' element={!user?<Login/>:<Navigate to='/'/>}/>
          <Route path='/signup' element = {!user?<Signup/>:<Navigate to='/'/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;

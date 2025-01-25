import React from 'react';
import {Routes,Route} from 'react-router-dom';

// pages

import Home from './pages/Home';


// Components
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Signup from './pages/signup';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element = {<Signup/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;

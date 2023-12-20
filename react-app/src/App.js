import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App (){
  return(
    <div className="App">
      <Router>
        <Routes>
            <Route path='/'element={<Home name="Adarsh"/>}/>
            <Route path='/Navbar'element={<Navbar/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
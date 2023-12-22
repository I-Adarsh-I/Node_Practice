import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Array from './components/Array'
import Todo from './components/Todo'
import Test from './components/Test'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App (){
  return(
    <div className="App">
      <Router>
        <Routes>
            <Route path='/'element={<Home name="Adarsh"/>}/>
            <Route path='/Navbar'element={<Navbar/>}/>
            <Route path='/Array'element={<Array/>}/>
            <Route path='/Todo'element={<Todo/>}/>
            <Route path='/Test'element={<Test/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
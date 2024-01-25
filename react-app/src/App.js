import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Array from './components/Array'
import Todo from './components/Todo'
import Test from './components/Test'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentPOST from './components/StudentPOST';
import JsonPractice from './components/JsonPractice';
import AxiosPractice from './components/AxiosPractice';

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
            <Route path='/StudentPOST'element={<StudentPOST/>}/>
            <Route path='/jsonpractice'element={<JsonPractice/>}/>
            <Route path='/axiospractice' element={<AxiosPractice />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
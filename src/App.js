import './App.css';
import {Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Card from './pages/Card'
import Setting from './pages/Setting'
import Transaction from './pages/Transaction'
import Sidebar from './components/Sidebar';



function App() {
  return (

    <div className="App">
     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/transaction" element={<Transaction/>}> </Route>
     <Route path="/setting" element={<Setting/>}></Route>
     <Route path="/card" element={<Card/>}> </Route> 
     </Routes>
     <Sidebar> </Sidebar>
 
    </div>
  ); 
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Table from './components/Table';
import Card from './pages/Card';
import Logout from './pages/Logout';
import Setting from './pages/Setting';
import Transaction from './pages/Transaction';

function App() {
  return (
    <>
      <Router> 
        <Sidebar/>
      <Table/>
        <Routes className='container'>
       
        <Route path='/'  /> 
          <Route path="/transaction" element={<Transaction/>}/>
          <Route  path='/card' element={<Card/>} />
          <Route  path="/setting" element={<Setting/>} />
          <Route path='/logout' element={<Logout/>} />
                  </Routes>

      </Router>
    </>
  );
}

export default App;

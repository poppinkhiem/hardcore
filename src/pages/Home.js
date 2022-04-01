import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar';

function Home() {
  return (
    <div>
 
    <Link to="transaction"></Link>
    <Link to="card"></Link>
    <Link to="setting"></Link>



  </div>
  )
}

export default Home; 
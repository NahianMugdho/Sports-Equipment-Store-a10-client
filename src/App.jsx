import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import Card from './components/Card';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './components/Home'

function App() {
 
  const [cartItems, setCartItems] = useState([]);


  return (
    <>
    {/* <h1>Data List : {datas.length}</h1> */}
    <div className='mx-auto w-11/12'>
    <Navbar  />
    
    
    <Footer></Footer>
    </div>
  
    </>
  )
}

export default App

import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'


const App = () => {
  return (
    <div>
      
      <div className="mb-4">
     <Navbar/>
     <div className='px-3 sm:px-[5vw] md:px-[4vw] lg:px-[6vw]'>
     <SearchBar/></div>
     </div>
     {/* <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
     <Home/>
     </div> */}
     <div className='px-3 sm:px-[5vw] md:px-[4vw] lg:px-[6vw]'>
      <Routes >
       <Route path='/home' element={<Home/>} /> 
      <Route path='/collection' element={<Collection/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/product/:productId' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/place-order' element={<PlaceOrder/>} />
      <Route path='/orders' element={<Orders/>} />

      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App

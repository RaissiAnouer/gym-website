import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Guides from './pages/Guides'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import { assets } from './assets/assets'
import InfityScroller from './components/InfityScroller'

const App = () => {
  const text1 = 'GET YOUR DREAM SHAPE WITH OUR PROGRAMS THAT MADE BY PROFESSIONALS AND BODY BUILDERS, CONVENIENT FOR PEOPLE OF ALL AGES.'
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/guides' element={<Guides />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
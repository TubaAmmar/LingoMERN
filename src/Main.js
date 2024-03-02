import React from 'react'
import Header from './Component/navigation/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/pages/Home';
import Ielts from './Component/pages/Cards/Ielts';
import Services from './Component/pages/Services';
import Contact from './Component/pages/Contact';
import Nav2 from './Component/navigation/Nav2'
import Footer from './Component/navigation/Footer';
import { Success } from './Component/pages/Success';
import UserData from '../src/Component/userData'


function Main() {
  return (
    <BrowserRouter>

    <Header />
    <Nav2 />
    
    <Routes>
    
    <Route path='/' exact  element={<Home />}  />
    <Route path='/services' exact  element={<Services />}  />
    <Route path='/contact' exact  element={<Contact />}  />
  
    <Route path='/ielts' exact  element={<Ielts />}  />
    <Route path='/success' exact  element={<Success />}  />
    <Route path='/userData' exact  element={<UserData />}  />
  
  </Routes>

  <Footer />

  

    </BrowserRouter>
  )
}

export default Main
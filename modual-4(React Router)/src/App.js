import React, { useEffect } from 'react'
import './index.css';
import Home from "./Home"
import Contact from './components/client/Pages/Contact';
import Service from './components/client/Pages/Service';
import Project from './components/client/Pages/Project';
import Features from './components/client/Pages/Features';
import ErrorPage from './components/client/Pages/ErrorPage';
import "aos/dist/aos.css"
import AOS from 'aos';
import {BrowserRouter,Routes , Route } from 'react-router-dom';
import About from "./components/client/Pages/About"
import NavbarApp from './components/client/NavbarApp';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Our from './components/client/Pages/Our Team';


import AdminLogin from "./components/admin/AdminLogin"
import { AdminLayout } from './AdminLayout';



const App = () => {


  
  useEffect(() => {
    AOS.init();
  }, []
  ) 
  return (
      <>
       
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<NavbarApp/>}>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contant" element={<Contact/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/Project" element={<Project/>}/>
          <Route path="/Features" element={<Features/>}/>
          <Route path="/Our" element={<Our/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="*" element={<ErrorPage/>}/>
          </Route>  

          {/* admin login here */}
          <Route path="/admin-login" element={<AdminLogin />}></Route>
          <Route path="/admin-login/admin-dashboard" element={<AdminLayout />}></Route>
         
       
       </Routes>
       </BrowserRouter>
 
       </>
  )
}
export default App;
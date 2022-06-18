import React from 'react';
import Navbar from "./components/NavBar"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from './components/Footer';


const Layout = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <Main/> 
      <Footer/>
    </>
  )
}

export default Layout


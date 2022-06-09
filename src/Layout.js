import React from 'react';
import Navbar from "./components/NavBar"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from './components/Footer';
import ContactForm from "./components/ContactForm"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <Main />
      <ContactForm />
      <Footer/>
    </>
  )
}

export default Layout


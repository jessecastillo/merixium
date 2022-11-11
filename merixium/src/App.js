//import { useRef } from 'react';
import NavBar from './components/NavBar.js';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
//import CustomButton from './components/CustomButton';
import './App.css';

//import { Component } from 'react';
import Home from './pages/Home';
import Links from './pages/Links';
import Contact from './pages/Contact';
import About from './pages/About';
import Gratitude from './pages/Gratitude';
import EasterEggs from './pages/EasterEggs';
//import { elementAcceptingRef } from '@mui/utils';
import ScrollToTop from './components/ScrollToTop.js';
import { render } from 'react-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.js';




  

function App() {

  
  
  const [bgColour, setBgColour] = useState("#fafafa");

  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/links":
      component = <Links />
      break
    case "/about":
      component = <About />
      break
    case "/contact":
      component = <Contact />
      break
    case "/gratitude":
      component = <Gratitude />
      break
    case "/eastereggs":
      component = <EasterEggs/>
      break
      default:
        return "/"

  }

/*  const appStyles = {
    height: "100vh",
    background: `${bgColour}`,
  };
  const styles = {
    width: "100px",
    fontSize: "20px",
    borderRadius: "40px",
    border: "1px solid black",
    color: "white",
    margin: "0.5em 1em",
    padding: "0.25em 1em",
    background: "#c83f49",
  };
  */
  
  /*
  const Links = useRef(null);
  const About = useRef(null);
  const Contact = useRef(null);
  const Gratitude = useRef(null);
  const EasterEggs = useRef(null);
  */

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }




  
  return (
    <>
      <ScrollToTop />
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/links' element = {<Links/>} />
          <Route path = '/about' element = {<About/>} />
          <Route path = '/contact' element = {<Contact/>} />
          <Route path = '/gratitude' element = {<Gratitude />} />
          <Route path = '/eastereggs' element = {<EasterEggs />} />
        </Routes>
 
        <Footer />

      </BrowserRouter>
  </>
  )
  
}
//<div><Link to={{ pathname: "https://instagram.com/djmerixium/" }} target="_blank">Instagram</Link></div>
//<div className="container">{component}</div>
export default App;

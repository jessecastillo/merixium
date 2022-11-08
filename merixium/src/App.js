//import { useRef } from 'react';
import NavBar from './components/NavBar.js';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import CustomButton from './components/CustomButton';
import './App.css';
import { component } from 'react';
import Home from './pages/Home';
import Links from './pages/Links';
import Contact from './pages/Contact';
import About from './pages/About';
import Gratitude from './pages/Gratitude';
import EasterEggs from './pages/EasterEggs';
import { elementAcceptingRef } from '@mui/utils';
import ScrollToTop from './components/ScrollToTop.js';



  

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

  }

  const appStyles = {
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
      <Router>
        <NavBar />
        <div className="container">{component}</div>
        <Routes>
          <Route path = '/' component = {Home} />
          <Route path = '/Links' component = {Links} />
          <Route path='/About' component = {About} />
          <Route path='/Contact' component = {Contact} />
          <Route path='/Gratitude' component = {Gratitude} />
          <Route path='/EasterEggs' component = {EasterEggs} />
        </Routes>

        <div className='about'><h3>My DJ name is Merixium but my full name is Jesse Castillo!</h3></div>
      </Router>
  </>
  )
}

export default App;

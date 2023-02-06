//import { useRef } from 'react';
import NavBar from './components/NavBar.js';
import React, { useEffect, useState } from "react";
import './App.css';
import Home from './pages/Home';
import Links from './pages/Links';
import Contact from './pages/Contact';
import About from './pages/About';
import Gratitude from './pages/Gratitude';
import ScrollToTop from './components/ScrollToTop.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.js';
import PageNotFound from './components/PageNotFound.js';
import RandomText from './components/CallingCard.js';






  

function App() {

  

  const [bgColour, setBgColour] = useState("#fafafa");
  const PageTitle = (props) => {
    useEffect(() => {
      document.title = props.title;
    }, [props.title]);
    return null;
  };

 /* let component
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

  */

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
      <PageTitle title = "Merixium" />
      <ScrollToTop />
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/links' element = {<Links/>} />
          <Route path = '/about' element = {<About/>} />
          <Route path = '/contact' element = {<Contact/>} />
          <Route path = '/gratitude' element = {<Gratitude />} />
          <Route path = '*' element = {<PageNotFound/>} />
        </Routes>
        <RandomText text="Merixium"/>
        <Footer />

      </BrowserRouter>
  </>
  )
  
}
//          <Route path = '/eastereggs' element = {<EasterEggs />} />
//<div><Link to={{ pathname: "https://instagram.com/djmerixium/" }} target="_blank">Instagram</Link></div>
//<div className="container">{component}</div>
export default App;

import { createMuiTheme, ThemeProvider } from '@mui/material/styles'
import NavBar from './components/NavBar.js';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import CustomButton from './components/CustomButton';
import './App.css';
import { NativeSelect } from '@mui/material';
import { Component } from 'react';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import Gratitude from './pages/Gratitude';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667" //#4287f5 Hex
    }
  }

})


  

function App() {
  
  const [bgColour, setBgColour] = useState("#fafafa");
  let component
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

  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/contact":
      component = <Contact />
      break
    case "/about":
      component = <About />
      break
    case "/gratitude":
      component = <Gratitude />
      break

  }
//return (
//<div className="App" style={appStyles}>
//  <button
//  style={styles}
//  onMouseEnter={() => setBgColour("#c83f49")}
//  onMouseLeave={() => setBgColour("#fafafa")}
//  >
//    {" "}
//    Red
//    </button>
//    </div>
//    );
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path = '/' exact component = {Home} />
        </Routes>
        <div className="container">{component}</div>
      </Router>
  </>
  )
}

export default App;

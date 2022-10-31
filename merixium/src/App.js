import { createMuiTheme, ThemeProvider } from '@mui/material/styles'
import NavBar from './components/NavBar.js';
//import CustomButton from './components/CustomButton';
//import logo from './logo.svg';
import './App.css';
import { NativeSelect } from '@mui/material';
import { Component } from 'react';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import About from './pages/About';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667" //#4287f5 Hex
    }
  }

})

function App() {
  let component
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

  }
  return (
    <>
    <NavBar />
    <div className="conainer">{component}</div>
    
  </>
  )
}

export default App;

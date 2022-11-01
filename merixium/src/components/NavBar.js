import { Button } from '@mui/material';
import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
//import { Button } from './Button';


export default function NavBar() {

    const path = window.location.pathname
    const [click, setClick] = useState(false);
    const handleClick =() => setClick(!click);
    const [button, setButton] = useState(true)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    return (
    <nav className="navbar">
        <div className='navbar-container'>
            <Link to= "/'" className='navbar-logo'>
                MERIXIUM
            </Link>
        <div className='menu-icon' onClick={handleClick}>
         <a href="/" className="site-title">
            Merixhhhhhhhhhhhium
        </a>
        
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
         <ul>
            <li>
                <a href ="/contact">Contact</a>
            </li>
            <li>
                <a href ="/about">About</a>
            </li>
            <li>
                <a href ="gratitude">Gratitude</a>
            </li>
            <li>
                {button && <Button buttonStyle='btn--outline'>EXPLORE THE WONDER</Button>}
            </li>
         </ul>
         </div>
    </nav>
    )
}

import { Button } from '@mui/material';
import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
//import { Button } from './Button';


export default function NavBar() {

    const path = window.location.pathname
    const [click, setClick] = useState(false);
    const handleClick =() => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
    <nav className="navbar">
        <div className='navbar-container'>
            <Link to= "/'" className='navbar-logo' onClick={closeMobileMenu}>
                MERIXIUM <i className='fab fa-typo3' /> 
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                     </div>
                     <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                                Meeeeeeeerixium
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contacts
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/gratitude' className='nav-links' onClick={closeMobileMenu}>
                                Gratitude
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            {button && <Button buttonStyle='btn--outline'>Easter Eggs</Button>}
                            </li>
                            </ul>
                            </div>
                            </nav>
    )
}

//<ul/>
//<li>
//    <a href ="/contact">Contact</a>
//    </li>
//    <li>
//        <a href ="/about">About</a>
//        </li>
//        <li>
//            <a href ="gratitude">Gratitude</a>
//            </li>
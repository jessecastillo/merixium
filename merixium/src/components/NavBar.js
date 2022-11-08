//import { Button } from '@mui/material';
import React, { useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { Button } from './Button';
//import { HashLink as Link} from 'react-router-hash-link';


function NavBar() {

  
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    const path = window.location.pathname
    return (
        <>
    <nav className="navbar">
        <div className='navbar-container'>
            <Link to= "/" className='navbar-logo' onClick={closeMobileMenu}>
                MERIXIUM &nbsp; <i className='fa-solid fa-headphones-simple' /> 
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                     </div>
                     <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/links' className='nav-links' onClick={closeMobileMenu}>
                                Links
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/gratitude' className='nav-links' onClick={closeMobileMenu}>
                                Gratitude
                            </Link>
                        </li>
                        </ul>
                        {button && <Button buttonStyle='btn--outline'>
                            <Link to='/eastereggs' className='nav-links' onClick={closeMobileMenu}>
                            Easter Eggs<i class="fa-brands fa-think-peaks"></i>
                            </Link></Button>}
                    </div>
                    </nav>
                    </>
    );
}

/*
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
  */

export default NavBar;

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
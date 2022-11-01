import React, { useState} from 'react'


export default function NavBar() {

    const path = window.location.pathname
    const [click, setClick] = useState(false);
    const handleClick =() => setClick(!click);

    return (
    <nav className="nav">
        <div className='menu-icon' onClick={handleClick}>
         <a href="/" className="site-title">
            Merixium
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
         </ul>
    </nav>
    )
}

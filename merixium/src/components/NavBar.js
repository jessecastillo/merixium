import React from 'react'

export default function NavBar() {
    const path = window.location.pathname
    return (
    <nav className="nav">
         <a href="/" className="site-title">
            Merixium
        </a>
         <ul>
            <li>
                <a href ="/pricing">Pricing</a>
            </li>
            <li>
                <a href ="/about">About</a>
            </li>
         </ul>
    </nav>
    )
}

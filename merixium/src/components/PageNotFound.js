import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css';


function PageNotFound() {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <h3>Looks like that page has yet to be created or the page URL was typed incorrectly. But here's a cool picture for your troubles!</h3>
            <Link to='/' className='link-style'>Back to the home page...</Link>
        </div>
    )
}

export default PageNotFound

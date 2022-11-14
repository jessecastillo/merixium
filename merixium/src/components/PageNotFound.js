import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css';


function PageNotFound() {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to='/'>Back to the home page...</Link>
        </div>
    )
}

export default PageNotFound

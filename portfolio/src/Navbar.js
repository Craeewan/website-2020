import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar__container">
            <Link to='/'>
                <div className="navbar__option">
                    <h1>Home</h1>
                </div>
            </Link>
            <Link to='/skills'>
                <div className="navbar__option">
                    <h1>Skills</h1>
                </div>
            </Link>
            <Link to='/projects'>
                <div className="navbar__option">
                    <h1>Projects</h1>
                </div>
            </Link>

        </div>
    )
}

export default Navbar

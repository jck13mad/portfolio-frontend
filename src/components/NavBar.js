import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav id='mainNav'>
            <div id='navList'>
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <NavLink
                            className='nav-link'
                            to="/"
                            exact
                        >Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink
                            className='nav-link'
                            to="/about"
                            exact
                        >About</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink
                            className='nav-link'
                            to="/projects"
                            exact
                        >Portfolio</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink
                            className='nav-link'
                            to="/contact"
                            exact
                        >Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav class='navbar navbar-expand-lg navbar-light bg-light'>
            <div class="container-fluid">
                <ul class="navbar-nav me-auto">
                    <li className='nav-item'>
                        <NavLink
                            className='nav-link active'
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
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
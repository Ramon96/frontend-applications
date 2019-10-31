import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div id="header-logo">NMVW</div>
            <nav>
                <Link  to='/'> Home </Link>
                <Link to='/doodle'> Doodle </Link>
            </nav>
        </header>
    )
}


export default Header;
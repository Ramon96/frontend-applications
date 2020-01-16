import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/" id="header-logo">NMVW</Link>
            {/* <nav>
                <Link  to='/'> Home </Link>
                <Link to='/doodle'> Doodle </Link>
            </nav> */}
        </header>
    )
}


export default Header;
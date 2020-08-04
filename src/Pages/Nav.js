import React from 'react';
import {Link} from 'react-router-dom';
import './../App.css';

const Nav = () => {
    const navStyle = {
        color : 'white',
        textDecoration : 'none',
        listStyleType:'none',
    }
    
    return(
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                <li>Pic Some</li>
                </Link>
                <Link style={navStyle} to="/cart">
                <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;
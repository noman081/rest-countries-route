import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav className='nav-bar d-lg-flex justify-content-between align-items-center'>
            <div>
                <h3><Link to='/'>Rest Countries</Link></h3>
            </div>
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/countries'>Countries</Link>
                <Link to='/about'>About</Link>
                <Link to='/pricing'>Pricing</Link>
            </div>
        </nav>
    );
};

export default Header;
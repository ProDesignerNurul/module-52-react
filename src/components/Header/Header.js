import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Product</Link>
            </nav>
            <div>
                <h3>Alltime Showing</h3>
            </div>
        </div>
    );
};

export default Header;
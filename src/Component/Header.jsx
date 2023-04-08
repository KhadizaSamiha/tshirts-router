import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='font-semibold '>
            <Link className='p-5' to='/'>Home</Link>
            <Link className='p-5' to='/review'>OrderReview</Link>
            <Link className='p-5' to='/about'>About</Link>
            <Link className='p-5' to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header;
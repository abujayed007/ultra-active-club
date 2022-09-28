import React from 'react';
import './Header.css'
import logo from './Logo.png'


const Header = () => {
    return (
        <div className='header'>
            <a className='title' href="/excercise"><img src={logo} alt="" />Health-Is-Wealth</a>
        </div>
    );
};

export default Header;
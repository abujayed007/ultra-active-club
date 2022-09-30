import React from 'react';
import './Header.css'
import logo from './Logo.png'


const Header = () => {
    return (
        <div className='header'>
            <div >
            <a className='title' href="/excercise"><img src={logo} alt="" />Be Strong</a>
        </div>
        <h2>Selecet Today's Excercise</h2>
        </div>
    );
};

export default Header;
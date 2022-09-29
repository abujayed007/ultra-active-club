import React from 'react';
import Profile from '../Profile/Profile';
import './Cart.css'

const Cart = () => {

    return (
        <div className='cart'>
            <Profile></Profile>
            <h2>Add a break</h2>
          <div className="timer">
          <a href="/10">10s</a>
            <a href="20">20s</a>
            <a href="30">30s</a>
            <a href="60">60s</a>
          </div>
          <div>
          <h3 className='excercise-time'>Excercise Time</h3>
          <h3 className='break-time'>Break Time</h3>
           
          </div>
        </div>
    );
};

export default Cart;
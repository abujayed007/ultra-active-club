import React from 'react';
import Profile from '../Profile/Profile';
import './Cart.css'

const Cart = (props) => {
  const {name, seconds} = props.cart;
  console.log(props)
  let second = 0;
  for (const item of props.cart){
    second = parseFloat(second  + item.seconds)
   }
   const setTimer = () =>{
   
   }

    return (
        <div className='cart'>
            <Profile></Profile>
            <h2>Add a break</h2>
          <div className="timer">
            <button onClick={setTimer}>10s</button>
            <button onClick={setTimer}>20s</button>
            <button onClick={setTimer}>30s</button>
            <button onClick={setTimer}>60s</button>
          </div>
          <div>
          <h3 className='excercise-time'>Excercise Time: <p>{second} seconds</p> </h3>
          <h3 className='break-time'>Break Time: <p> seconds</p> </h3>
           
          </div>
        </div>
    );
};

export default Cart;
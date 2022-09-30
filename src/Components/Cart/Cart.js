import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import { addToDb } from "../Timer/Timer";
import { ToastContainer, toast } from 'react-toast'
import './Cart.css'

const Cart = (props) => {
  // console.log(props)
 
const [time, setTime] = useState(0)


useEffect(() => {
  let newTime = []
  const brTime = localStorage.setItem("time", JSON.stringify(time));
  // const brTime = localStorage.getItem("time")
  if(brTime){
    brTime.push(newTime)
  }
}, [time]);





 
  const {name, seconds, esec} = props.cart;
  // console.log(props)

  let second = 0;
  for (const item of props.cart){
    second = parseFloat(second  + item.seconds)
   }
   const diffToast = () =>{
    toast('You Successfuly Done Everything 👋')
   }

  return (
        <div className='cart'>
            <Profile></Profile>
            <h2>Add a break</h2>
          <div className="timer">
            <button onClick={()=>(setTime(10))}>10s</button>
            <button onClick={()=>(setTime(20))}>20s</button>
            <button onClick={()=>(setTime(30))}>30s</button>
            <button onClick={()=>(setTime(60))}>60s</button>
          </div>
          <div>
            <h3 className='excercise-time'>Excercise Time:<p>{second} seconds</p> </h3>
            <h3 className='break-time'>Break Time: <p>{time} seconds</p> </h3>
          </div>
          <div className='activity'>
          <button onClick={diffToast} className='activity-btn'>Activity Completed</button>
          <ToastContainer />
          </div>
            
          
    
          
        </div>
    );
};

export default Cart;
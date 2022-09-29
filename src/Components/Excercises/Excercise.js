import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Package from '../Package/Package';
import './Excercise.css'

const Excercise = () => {
    const [excercises, setExcercises] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data =>setExcercises(data))
    },[])
    return (
      <div className='excercise-container'>
       <div>
       <Header></Header>
          <div className='info'>
            {
                excercises.map(excercise => <Package key={excercise.id} excercise={excercise}></Package>)
            } 
        </div>
       </div>
        <div>
        <Cart></Cart>
        </div>
      </div>
    );
};

export default Excercise;
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
      <div>
        <h2 className='titles'>Select Today's Excercises</h2>
          <div className='info'>
            <div className='excercise'>
            {
                excercises.map(excercise => <Package excercise={excercise}></Package>)
            }
            </div>
            <Cart></Cart>
        </div>
      </div>
    );
};

export default Excercise;
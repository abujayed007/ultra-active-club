import React, { useCallback, useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Package from '../Package/Package';
import './Excercise.css'

const Excercise = () => {
    const [activities, setActivities] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data =>setActivities(data))
    },[]);

    const hanldleAddToTime = (activity) => {
      // console.log(activity);
      const newCart = [...cart, activity]
     setCart(newCart)
    }

    return (
      <div className='excercise-container'>
       <div>
       <Header></Header>
          <div className='info'>
            {
                activities.map(activity =><Package  
                  key={activity.id} 
                  activity={activity}
                  handleAddToTime={hanldleAddToTime}>
                  </Package>)
            } 
          </div>
       </div>
        <div>
             
             <Cart cart={cart}></Cart>
             
        </div>
      </div>
    );
};

export default Excercise;
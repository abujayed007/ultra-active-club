import React from 'react';
import './Package.css'

const Package = ({excercise}) => {
    const hanldleAddToTime = () =>{
        console.log('Okk')
    }

    const {name, img, title, seconds, ages} = excercise
    return (
        <div className='package'>
            <img src={excercise.img} alt="" />
            <div className="package-info">
            <h3>{excercise.name}</h3>
            <h5>For Age: <small>{excercise.ages}</small> </h5>
            <p>{excercise.title}</p>
            <h5>Time Requires: <small> {excercise.seconds} </small> s</h5>
            <button onClick={hanldleAddToTime} className='add-btn'>Add To List</button>
            </div>
            
        </div>
    );
};

export default Package;
import React from 'react';
import './Package.css'

const Package = ({excercise}) => {

    const {name, img, title, seconds, ages} = excercise
    return (
        <div className='package'>
            <img src={excercise.img} alt="" />
            <div className="package-info">
            <h3>{excercise.name}</h3>
            <h5>For Age: {excercise.ages}</h5>
            <p>{excercise.title}</p>
            <h5>Time Requires: {excercise.seconds} s</h5>
            </div>
            <button className='add-btn'>Add To List</button>
        </div>
    );
};

export default Package;
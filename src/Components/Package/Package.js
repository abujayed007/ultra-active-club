import React from 'react';
import './Package.css'

const Package = (props) => {
    const {name, img, title, seconds, ages} = props.activity
    const {handleAddToTime} = props
    // console.log(props)
   
    return (
        <div className='package'>
            <img src={img} alt="" />
            <div className="package-info">
            <h3>{name}</h3>
            <h5>For Age: <small>{ages}</small> </h5>
            <p>{title}</p>
            <h5>Time Requires: <small> {seconds} </small> s</h5>
            <button onClick={() =>handleAddToTime(props.activity)} className='add-btn'>Add To List</button>
            </div>
            
        </div>
    );
};

export default Package;
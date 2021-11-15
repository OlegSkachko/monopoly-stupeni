import React from 'react';
import './index.css'

const Ball = (props) => {
    return (
        <div className={props.color ==='green'? 'ball green': 'ball'}/>
    );
};

export default Ball;
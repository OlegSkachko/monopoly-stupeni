import React from 'react';
import './index.css'
const DialogInput = (props) => {
    return (
        <div className='inp-main'>
            <input className='inp'
            value = {props.value} 
            onChange = {props.onChange}>
            </input>
            <button 
                 className='btn' 
                 onClick={props.onClick}>
                    оk
            </button>
        </div>
    );
};

export default DialogInput;
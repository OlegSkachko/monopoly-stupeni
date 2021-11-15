import React from 'react';
import Dice from '../Dice/Dice';
import './index.css'

const ModalWindow = (props) => {
    return (
        <div className={props.active}>
               <h3>бросить кости</h3><br/><br/>
               <h2> {props.dice1} {props.dice2}</h2>
               {/* <Dice number={props.dice1}/> <Dice number={props.dice2}/> */}
                   <button className='btn1' onClick={props.onClick}>ок</button>
        </div>
    );
};

export default ModalWindow;
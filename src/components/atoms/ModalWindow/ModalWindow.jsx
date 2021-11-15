import React from 'react';
import './index.css'

const ModalWindow = (props) => {
    return (
        <div className={props.active}>
           <div className='modal_content'>
               <h3>бросить кости</h3><br/><br/><br/>
               {props.dice1} {props.dice2}
                   <button className='btn1' onClick={props.onClick}>ок</button>
           </div>
        </div>
    );
};

export default ModalWindow;
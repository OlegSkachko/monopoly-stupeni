import React from 'react';
import './index.css'

const Dice = (props) => {
    return (
        <div number={props.number}>
           {
                props.number === 1 ? 
                <div className="face1">
                    <span className="pip"></span>
                </div> : <></>
 
           } 
            {props.number === 2 ?
            <div className="face2">
                <span className="pip"></span>
                <span className="pip"></span>
            </div> : <></> }
            {props.number === 3 ?
            <div className="face3">
                <span className="pip"></span>
                <span className="pip"></span>
                <span className="pip"></span>
            </div> : <></> }
            
            {props.number === 4 ?
            <div className="face4">
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
            </div> : <></> }
 
            { props.number === 5 ?
            <div className="face5">
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
                <div className="column">
                    <span className="pip"></span>
                </div>
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
            </div> : <></> }
            { props.number === 6 ?
            <div className="face6">
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
                <div className="column">
                    <span className="pip"></span>
                    <span className="pip"></span>
                    <span className="pip"></span>
                </div>
            </div> : <></> }
 
        </div>
    );
};

export default Dice;
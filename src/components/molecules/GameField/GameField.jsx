import React, { useState } from 'react';
import Ball from '../../atoms/Ball/Ball';
import './index.css'

const GameField = () => {

    const [count, setCount] = useState(0)
    let arr = []

    function createFields() {
        for(let i=0; i<=40; i++) {
            arr.push("")
        }
       
        return arr.map((i,index)=> {
         if(index===count){
                return <div onClick={()=> changeBall(index)} style={{backgroundColor:'green'}} className="table-body-board-fields-one"> <Ball/> </div>
                }
                return <div onClick={()=> changeBall(index)}  className="table-body-board-fields-one"> {/* 1 */} </div>
            })
    }

    function changeBall(index) {
        if(index<count) {
            for(let i=count; i<=40; i++) {
                setCount(i)
                if(i===40){
                    for(let i=1; i<=index; i++) {
                        setCount(i)} 
                    }
                }
        } else {
            for(let i=count; i<=index; i++) {
                setCount(i)
            }
        }            
    }


    return (
        <div class="table-body-board-fields">
            {createFields()}
        </div>
    );
};

export default GameField;
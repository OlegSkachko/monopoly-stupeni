import React, { useState } from 'react';
import Ball from '../../atoms/Ball/Ball';
import ModalWindow from '../../atoms/ModalWindow/ModalWindow';
import './index.css'

const GameField = () => {
    const [modal, setModal] = useState(true)
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [dice1, setDice1] = useState('')
    const [dice2, setDice2] = useState('')
    let arr = []
   
    function createFields() {
        for(let i=0; i<40; i++) {
            arr.push("")
        }
       
        return arr.map((i,index)=> {
         if(index===count){
                return <div onClick={()=> changeBall(index)} className="table-body-board-fields-one"> <Ball/> </div>
                }
         if(index===count1){
            return <div onClick={()=> changeBall(index)} className="table-body-board-fields-one"> <Ball color='green'/> </div>
            }
            return <div onClick={()=> changeBall(index)}  className="table-body-board-fields-one"> {/* 1 */} </div>
         })
    }
    
function changeBall(index) {}
  
function dice() {
    let a =Math.trunc(Math.random()*6+1)
    let b =Math.trunc(Math.random()*6+1)
    setDice1(a)
    setDice2(b)
    
    let index = count+a+b 
  
        if(index>40) {
            let k=1
            for(let i=count; i<=40; i++) {
                k++
                setTimeout(() => {
                    setCount(i)
                },100+100*k); 
                if(i===40){
                    for(let i=0; i<=index-40; i++) {
                        k++
                        setTimeout(() => {
                            setCount(i)
                        
                        }, 100+100*k); } 
                    }
                  
                }
                
        }   
        else {
            for(let i=count, k=1; i<=index; i++) {
                k++
                setTimeout(() => {
                    setCount(i)
                   
                },100+100*k); 
            }
        }         
}

    return (
        <>

        <ModalWindow
    active={modal===true? 'modal': 'inactive'}
    onClick={dice}
    dice1={dice1}
    dice2={dice2}
    />
        <div class="table-body-board-fields">
            {createFields()}
        </div>
        </>
    );
};

export default GameField;
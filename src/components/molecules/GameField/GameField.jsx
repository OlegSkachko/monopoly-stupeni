import React, { useState } from 'react';
import Ball from '../../atoms/Ball/Ball';
import Dice from '../../atoms/Dice/Dice';
import ModalWindow from '../../atoms/ModalWindow/ModalWindow';
import gifDice from './../../../img/dice1.gif'
import './index.css'
import diceAudio from './../../../audio/dice.mp3'
import q1 from './../../../img/start.png'
import q2 from './../../../img/chanel.svg'
const GameField = () => {
    let audioDice = new Audio(diceAudio)
    const [num, setNum] =useState(false)
    const [modal, setModal] = useState(true)
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [dice1, setDice1] = useState('')
    const [dice2, setDice2] = useState('')
    const [num1, setNum1] =useState(false)
    let arr = []
   
    function createFields() {
        for(let i=0; i<40; i++) {
            arr.push("")
        }
       
        return arr.map((i,index)=> {
         if(index===count){
                return <div onClick={()=> changeField(index)} 
                className="table-body-board-fields-one"> <Ball/> </div>
                }
         if(index===3){
            return <div onClick={()=> changeField(index)} className="table-body-board-fields-one"> <Ball color='green' /> </div>
            }
            return <div style={{ backgroundImage: `url(${q1})`, backgroundSize: 'contain', backgroundSize:'100%', backgroundRepeat: 'no-repeat'}} onClick={()=> changeField(index)}  className="table-body-board-fields-one"> {/* 1 */} </div>
         })
    }
    
function changeField(index) {
    
}

function resetDiceWaiting() {
    setTimeout(()=> setNum(false), 2600)
}  


function dice() {
    audioDice.play()
    setNum1(false)
    resetDiceWaiting()
    setNum(true)
    let a =Math.trunc(Math.random()*6+1)
    let b =Math.trunc(Math.random()*6+1)
    setDice1(a)
    setDice2(b)
    
    let index = count+a+b 
    setTimeout(()=> {
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
    },900)   
}

function diceWaiting() {
  
  
   if(num1===false) {
        setTimeout(()=>setNum1(true),1200)
       return <img className='img-dice' src={gifDice}/>
   } else {
     return <><Dice number={dice1}/> <Dice number={dice2}/></>
   }
   
   
}

    return (
        <div className='gamefield'>
            {
                num === false?
                <ModalWindow
                active={modal===true? 'modal': 'inactive'}
                onClick={dice}
                dice1={dice1}
                dice2={dice2}
                /> : <div className='dice'>{diceWaiting()}</div>
            }
        
    
        <div class="table-body-board-fields">
            {createFields()}
        </div>
        </div>
    );
};

export default GameField;
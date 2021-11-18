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
    const [dice1, setDice1] = useState('')
    const [dice2, setDice2] = useState('')
    const [num1, setNum1] = useState(false)
    const [gotoleft, setgotoleft] = useState(false)
    let arr = []

    const rightDict = {
        2: "gotoRight2",
        3: "gotoRight3",
        4: "gotoRight4",
        5: "gotoRight5",
        6: "gotoRight6",
        7: "gotoRight7",
        8: "gotoRight8",
        9: "gotoRight9",
        0: "stay"
    }
   
    function createFields() {
        for(let i=0; i<40; i++) {
            arr.push("")
        }
       
        return arr.map((i,index)=> {
         if(index===count){
                return <div onClick={()=> changeField(index)} 
                className="table-body-board-fields-one"> <Ball goto={gotoleft === true? rightDict[dice1 + dice2] : 'stay'} /> </div>
                }
         if(index===100){
            return <div onClick={()=> changeField(index)} className="table-body-board-fields-one"> <Ball color='green' /> </div>
            }
            return <div style={{ backgroundImage: `url(${q1})`, backgroundSize: 'contain', backgroundSize:'100%', backgroundRepeat: 'no-repeat'}} onClick={()=> changeField(index)}  className="table-body-board-fields-one"> {/* 1 */} </div>
         }
        )
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

    setgotoleft(true)

    setTimeout(() => {
        setCount(index)
        setgotoleft(false)
    }, (a + b) * 500);
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
import React, { useState } from 'react';
import ChatMessage from '../../atoms/ChatMessage/ChatMessage';
import DialogInput from '../../atoms/DIalogInput/DialogInput';
import ChatWindow from '../../molecules/ChatWindow/ChatWindow';
import "./index.css"

const Chat = () => {
    const [inp,SetInp] =useState('')
    const [i,setI] = useState(1)
    const [arr,setArr] = useState(JSON.parse(localStorage.getItem('zero'))||[])
    
    function submit() { 
      console.log('dshfkjsfs')
      let obj1 = {}
      obj1.key = Date.now()
      obj1.id = Date.now()
      obj1.message = inp
      setI(i+1)
      setArr([obj1,...arr])
      localStorage.setItem('zero', JSON.stringify(arr))
    }

    return (
        <div className='chat_main'>
            <ChatWindow textChat= {arr.map((obj)=> {
                        return(
                            <ChatMessage 
                            key={obj.key}
                            message = {obj.message}  
                            />) 
                    })}>
            </ChatWindow>
            <DialogInput 
                onChange={(e) => SetInp(e.target.value)}
                onClick={submit}
            ></DialogInput>
        </div>
    );
};

export default Chat;
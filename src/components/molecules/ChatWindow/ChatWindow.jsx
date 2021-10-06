import React from 'react';
import './index.css'
const ChatWindow = (props) => {
    return (
        <div className='chat'>  
            {props.textChat}
        </div>
    );
};

export default ChatWindow;
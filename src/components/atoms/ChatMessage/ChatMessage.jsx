import React from 'react';
import './index.css'

const ChatMessage = (props) => {
    return (
        <div className='mes'>
            {props.message}
        </div>
    );
};

export default ChatMessage;
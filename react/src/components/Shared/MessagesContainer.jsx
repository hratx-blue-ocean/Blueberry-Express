import React from 'react';
import { Message } from './Message.jsx';
import { MessageRead } from '../Modals/MessageRead';

export const MessagesContainer = ({ messages }) => {

  return (
    <div className="messages-container">
      <h2 className="message-header tracking-wide">Messages</h2>
      <div className="">
      {messages.map((message, index) => {
        return <MessageRead message={message} key={index}/>
      })}
      </div>
    </div>
  )
}
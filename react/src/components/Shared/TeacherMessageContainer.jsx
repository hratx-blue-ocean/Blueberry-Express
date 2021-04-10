import React from 'react';
import { MessageRead } from '../Modals/MessageRead';

export const TeacherMessageContainer = ({ messages }) => {

  return (
    <div className="teacher-messages-container">
      <h2 className="message-header tracking-wide">Messages</h2>
      <div className="">
        {messages.map((message, index) => {
          return <MessageRead message={message} key={index} />
        })}
      </div>
    </div>
  )
}
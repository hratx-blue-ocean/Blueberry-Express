import React from 'react';
import { TeacherMessage } from './TeacherMessage.jsx';

export const TeacherMessageContainer = () => {

  //To-Do - Remove Dummy data for real data

  let messagesArray = [
    {
      id: '1',
      from: 'Matt',
      subject: 'Our Meeting Time',
      created_at: '4/5/21'
    },
    {
      id: '2',
      from: 'Tahsin',
      subject: 'Hey whats up?',
      created_at: '4/5/21'
    },
    {
      id: '3',
      from: 'Brandon',
      subject: 'Appointment Approved',
      created_at: '4/5/21'
    },
  ]

  return (
    <div className="teacher-messages-container">
      <h2 className="message-header tracking-wide">Messages</h2>
      <div className="">
      {messagesArray.map((message, index) => {
        return <TeacherMessage message={message} key={index}/>
      })}
      </div>
    </div>
  )
}
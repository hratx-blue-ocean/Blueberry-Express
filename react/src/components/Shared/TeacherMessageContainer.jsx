import React from 'react';
import { MessageRead } from '../Modals/MessageRead';

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
    {
      id: '3',
      from: 'Cody',
      subject: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      created_at: '4/5/21'
    }
  ]

  return (
    <div className="teacher-messages-container">
      <h2 className="message-header tracking-wide">Messages</h2>
      <div className="">
      {messagesArray.map((message, index) => {
        return <MessageRead message={message} key={index}/>
      })}
      </div>
    </div>
  )
}
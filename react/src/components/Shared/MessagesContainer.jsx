import React from 'react';
import { Message } from './Message.jsx';

export const MessagesContainer = () => {

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
    <div className="bg-blue-600 rounded w-1/4 text-white text-center">
      <h2 className="text-3xl underline mb-4 p-3">Messages</h2>
      <div className="flex items-center flex-col">
      {messagesArray.map((message, index) => {
        return <Message message={message} key={index}/>
      })}
      </div>
    </div>
  )
}
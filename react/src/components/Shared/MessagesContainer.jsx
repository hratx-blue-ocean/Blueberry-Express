import React from 'react';
import { Message } from './Message.jsx';
import { MessageRead } from '../Modals/MessageRead';

export const MessagesContainer = () => {

  //To-Do - Remove Dummy data for real data

  let messagesArray = [
    {
      "id": 1000,
      "subject": "true",
      "from": 2,
      "unread": true,
      "created_at": "2021-04-08",
      "fromUser": {
        "id": 2,
        "name": "Kate",
        "email": "kate@gmail.com",
        "googleKey": "1",
        "calendarId": null,
        "bio": null,
        "profileImg": "https://picsum.photos/200",
        "timezone": 0,
        "lastLogin": "2021-04-08",
        "zoomLink": null,
        "student": false
        }
    },
    {
      "id": 1001,
      "subject": "true",
      "from": 3,
      "unread": true,
      "created_at": "2021-04-08",
      "fromUser": {
        "id": 2,
        "name": "Tahsin",
        "email": "kate@gmail.com",
        "googleKey": "1",
        "calendarId": null,
        "bio": null,
        "profileImg": "https://picsum.photos/200",
        "timezone": 0,
        "lastLogin": "2021-04-08",
        "zoomLink": null,
        "student": false
        }
    },
    {
      "id": 1002,
      "subject": "test",
      "from": 4,
      "unread": false,
      "created_at": "2021-04-08",
      "fromUser": {
        "id": 2,
        "name": "Matt",
        "email": "kate@gmail.com",
        "googleKey": "1",
        "calendarId": null,
        "bio": null,
        "profileImg": "https://picsum.photos/200",
        "timezone": 0,
        "lastLogin": "2021-04-08",
        "zoomLink": null,
        "student": false
        }
    }
  ]

  return (
    <div className="messages-container">
      <h2 className="message-header tracking-wide">Messages</h2>
      <div className="">
      {messagesArray.map((message, index) => {
        return <MessageRead message={message} key={index}/>
      })}
      </div>
    </div>
  )
}
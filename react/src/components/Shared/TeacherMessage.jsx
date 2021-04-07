import React from 'react';
import { MessageRead } from '../Modals/MessageRead';

export const TeacherMessage = ({ message }) => {
  return (
    <div className="teacher-individual-message" onClick={() => {console.log('clicked')}}>
      <div>
        <p className="teacher-message-subject">{message.from}: </p>
        <p>{message.subject.slice(0, 40)}{message.subject.length > 40 ? '...' : null}</p>
      </div>
      <div>
        <p className="teacher-message-subject">{message.created_at}</p>
      </div>
    </div>
  )
}
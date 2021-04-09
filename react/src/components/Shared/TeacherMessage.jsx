import React from 'react';

export const TeacherMessage = ({ message, handleClick }) => {
  return (
    <div className="teacher-individual-message" onClick={handleClick}>
      <div>
        <p className="teacher-message-subject">{message.fromUser.name}: </p>
        <p>{message.subject.slice(0, 40)}{message.subject.length > 40 ? '.....' : null}</p>
      </div>
      <div>
        <p className="teacher-message-subject">{message.created_at}</p>
        {!message.unread ? <p>Read</p> : <p>Unread</p>}
      </div>
    </div>
  )
}
import React from 'react';

export const TeacherMessage = ({ message }) => {
  return (
    <div className="individual-message">
      <div>
        <p className="message-subject">From:</p>
        <p>{message.from}</p>
      </div>
      <div>
        <p className="message-subject">Subject:</p>
        <p className="">{message.subject.slice(0, 40)}{message.subject.length > 40 ? '...' : null}</p>
      </div>
      <div>
        <p className="message-subject">Date:</p>
        <p>{message.created_at}</p>
      </div>
    </div>
  )
}
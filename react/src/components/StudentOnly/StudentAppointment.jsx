import React from 'react';
import {MessageBtn} from '../Buttons/MessageBtn';
import { MessageSend } from '../Modals/MessageSend.jsx';

export const StudentAppointment = ({ appointment }) => {
  let appointmentDate = new Date(appointment.start);
  let appointmentStart = new Date(appointment.start);
  let appointmentEnd = new Date(appointment.end);

  return (
    <div className="individual-appointment">
      <div className="appointment-info text-left">
        <p className="pb-1"><span>Teacher:</span> {appointment.with.name}</p>
        <p className="pb-1">Date: {appointmentDate.toLocaleDateString()}</p>
        <p className="pb-1">Start: {appointmentStart.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
        <p className="pb-1 mb-2">End: {appointmentEnd.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>

      </div>

      <div className="appointment-button">
        <MessageSend name={appointment.with.name} id={appointment.with.id}/>
      </div>
    </div>
  )
}
import React from 'react';
import {MessageBtn} from '../Buttons/MessageBtn'

export const StudentAppointment = ({ appointment }) => {

  return (
    <div className="individual-appointment">
      <div className="appointment-info">
        <p className="pb-1 text-lg"><span>Teacher:</span> {appointment.with}</p>
        <p className="pb-1"><span>Lang:</span> {appointment.lang}</p>
        <p className="pb-1">4/5/21 {appointment.start}</p>
      </div>

      <div className="appointment-button">
        <MessageBtn/>
      </div>
    </div>
  )
}
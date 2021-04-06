import React from 'react';
import {MessageBtn} from '../Buttons/MessageBtn'

export const StudentAppointment = ({ appointment }) => {

  return (
    <div className="flex justify-around items-center p-4 border border-white rounded-lg m-4 text-left">
      <div className="w-1/2">
        <p className="pb-1"><span>Teacher:</span> {appointment.with}</p>
        <p className="pb-1"><span>Language:</span> {appointment.lang}</p>
        <p className="pb-1"><span>Start:</span> {appointment.start}</p>
        <p className="pb-1"><span>End:</span> {appointment.end}</p>
      </div>
      <div>
        <MessageBtn/>
      </div>
    </div>
  )
}
import React from 'react';
import {MessageBtn} from '../Buttons/MessageBtn'
import { LargeBtn } from '../Buttons/LargeBtn'

export const TeacherAppointment = ({ appointment }) => {

  return (
    <div className="flex justify-between max-w-full items-center py-5 px-10 border border-white rounded-lg m-4">
      <div className="flex flex-col pr-36 text-left py-3">
        <span className="text-lg text-bold">Student: {appointment.with}</span> 
        <span className="text-md text-bold">Language: {appointment.lang}</span> 
        <span className="text-md text-bold">Start: {appointment.start}</span> 
        <span className="text-md text-bold">End: {appointment.end}</span> 
      </div>
      <div className="flex justify-between">
        <MessageBtn/>
        <LargeBtn label="Reschedule" />
      </div>
    </div>
  )
}
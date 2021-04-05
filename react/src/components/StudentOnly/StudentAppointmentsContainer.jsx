import React from 'react';
import {StudentAppointment} from './StudentAppointment';

export const StudentAppointmentsContainer = () => {
  const appointments = [
    {
      with: 'Matt',
      start: '8:30pm',
      end: '9:30pm',
      lang: 'Spanish'
    },
    {
      with: 'Brandon',
      start: '8:30pm',
      end: '9:30pm',
      lang: 'French'
    },
    {
      with: 'Tahsin',
      start: '8:30pm',
      end: '9:30pm',
      lang: 'Korean'
    }
  ]

  return (
    <div className="bg-blue-600 w-1/5 h-4/5 rounded-lg text-white text-center text-sm">
      <h1 className="text-3xl underline mb-4 p-3">Appointments</h1>
      <div className="pb-2">
        {appointments.map((appointment, index) => {
          return <StudentAppointment appointment={appointment} key={index}/>
        })}
      </div>
    </div>
  )
}
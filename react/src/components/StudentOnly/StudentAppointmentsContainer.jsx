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
    <div className="student-appointment-container bg-blue-600">
      <h1 className="underline text-xl mb-2 mt-3 tracking-wide">Appointments</h1>
      <div className="student-appointments">
        {appointments.map((appointment, index) => {
          return <StudentAppointment appointment={appointment} key={index}/>
        })}
      </div>
    </div>
  )
}
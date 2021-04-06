import React from 'react';
import {TeacherAppointment} from './TeacherAppointment';

export const TeacherAppointmentContainer = () => {
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
    },
    {
        with: 'Zach',
        start: '8:30pm',
        end: '9:30pm',
        lang: 'English'
    }
  ]

  return (
    <div className="teacher-appointment-container bg-blue-600">
      <h1 className="underline text-xl mb-2 mt-3 tracking-wide">Appointments</h1>
      <div className="teacher-appointments">
        {appointments.map((appointment, index) => {
          return <TeacherAppointment appointment={appointment} key={index}/>
        })}
      </div>
    </div>
  )
}
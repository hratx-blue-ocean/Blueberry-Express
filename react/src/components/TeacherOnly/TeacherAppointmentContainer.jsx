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
    <div className="bg-blue-600 max-w-full max-h-xl border border-gray-600 rounded-lg text-gray-100 text-center text-sm overflow-hidden overflow-y-scroll ">
      <h1 className="text-3xl underline mb-4 p-3">Appointments</h1>
      <div className="pb-2 px-10 ">
        {appointments.map((appointment, index) => {
          return <TeacherAppointment appointment={appointment} key={index}/>
        })}
      </div>
    </div>
  )
}
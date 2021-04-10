import React from 'react';
import {StudentAppointment} from './StudentAppointment';

export const StudentAppointmentsContainer = ({appointments}) => {

  return (
    <div className="student-appointment-container bg-blue-600">
      <h1 className="underline text-xl mb-2 mt-3 tracking-wide">Appointments</h1>
      <div className="student-appointments">
        {appointments.length ? appointments.map((appointment, index) => {
          return <StudentAppointment appointment={appointment} key={index}/>
        }) : "No upcoming appointments!"}
      </div>
    </div>
  )
}
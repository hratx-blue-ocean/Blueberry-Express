import React from 'react';
import {TeacherAppointment} from './TeacherAppointment';

export const TeacherAppointmentContainer = () => {
  const appointments = [
    {
      "with": {
        "id": 1001,
        "name": "Tahsin Ahmed",
        "email": "katespb98@gmail.com",
        "googleKey": "116841410873596401606",
        "calendarId": "c477flh6pj1qrip7nc1blg0870@group.calendar.google.com",
        "bio": null,
        "profileImg": "https://lh3.googleusercontent.com/a-/AOh14GiEiB0R1Mm3_ecpVu5dIq7h1AbEh9hIIC9jWmIZEg=s96-c",
        "timezone": 0,
        "lastLogin": "2021-04-09",
        "zoomLink": null,
        "student": true,
        "refreshToken": "1//0flMNdne7qhNNCgYIARAAGA8SNwF-L9Ir5O5q3ojAfJIcLIVNagMbwWvpHGpRvFmy3U-cLW7sFTGBf33TijIrLvO75ylUN8VZFJE"
      },
      "pending": true,
      "approved": false,
      "start": "2021-04-10T09:59:00Z",
      "end": "2021-04-11T11:00:00Z"
    },
    {
      "with": {
        "id": 1001,
        "name": "Matt Collins",
        "email": "katespb98@gmail.com",
        "googleKey": "116841410873596401606",
        "calendarId": "c477flh6pj1qrip7nc1blg0870@group.calendar.google.com",
        "bio": null,
        "profileImg": "https://lh3.googleusercontent.com/a-/AOh14GiEiB0R1Mm3_ecpVu5dIq7h1AbEh9hIIC9jWmIZEg=s96-c",
        "timezone": 0,
        "lastLogin": "2021-04-09",
        "zoomLink": null,
        "student": true,
        "refreshToken": "1//0flMNdne7qhNNCgYIARAAGA8SNwF-L9Ir5O5q3ojAfJIcLIVNagMbwWvpHGpRvFmy3U-cLW7sFTGBf33TijIrLvO75ylUN8VZFJE"
      },
      "pending": true,
      "approved": false,
      "start": "2021-04-10T11:10:00Z",
      "end": "2021-04-11T13:40:00Z"
    },
    {
      "with": {
        "id": 1001,
        "name": "Kate D",
        "email": "katespb98@gmail.com",
        "googleKey": "116841410873596401606",
        "calendarId": "c477flh6pj1qrip7nc1blg0870@group.calendar.google.com",
        "bio": null,
        "profileImg": "https://lh3.googleusercontent.com/a-/AOh14GiEiB0R1Mm3_ecpVu5dIq7h1AbEh9hIIC9jWmIZEg=s96-c",
        "timezone": 0,
        "lastLogin": "2021-04-09",
        "zoomLink": null,
        "student": true,
        "refreshToken": "1//0flMNdne7qhNNCgYIARAAGA8SNwF-L9Ir5O5q3ojAfJIcLIVNagMbwWvpHGpRvFmy3U-cLW7sFTGBf33TijIrLvO75ylUN8VZFJE"
      },
      "pending": true,
      "approved": false,
      "start": "2021-04-10T15:50:00Z",
      "end": "2021-04-11T17:10:00Z"
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
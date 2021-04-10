import React from 'react';
import {StudentAppointment} from './StudentAppointment';

export const StudentAppointmentsContainer = ({appointments}) => {
  // const appointments = [
  //     {
  //       "with": {
  //         "id": 1001,
  //         "name": "Kate D",
  //         "email": "katespb98@gmail.com",
  //         "googleKey": "116841410873596401606",
  //         "calendarId": "c477flh6pj1qrip7nc1blg0870@group.calendar.google.com",
  //         "bio": null,
  //         "profileImg": "https://lh3.googleusercontent.com/a-/AOh14GiEiB0R1Mm3_ecpVu5dIq7h1AbEh9hIIC9jWmIZEg=s96-c",
  //         "timezone": 0,
  //         "lastLogin": "2021-04-09",
  //         "zoomLink": null,
  //         "student": true,
  //         "refreshToken": "1//0flMNdne7qhNNCgYIARAAGA8SNwF-L9Ir5O5q3ojAfJIcLIVNagMbwWvpHGpRvFmy3U-cLW7sFTGBf33TijIrLvO75ylUN8VZFJE"
  //       },
  //       "pending": true,
  //       "approved": false,
  //       "start": "2021-04-10T09:59:00Z",
  //       "end": "2021-04-11T11:00:00Z"
  //     },
  //     {
  //       "with": {
  //         "id": 1001,
  //         "name": "Kate D",
  //         "email": "katespb98@gmail.com",
  //         "googleKey": "116841410873596401606",
  //         "calendarId": "c477flh6pj1qrip7nc1blg0870@group.calendar.google.com",
  //         "bio": null,
  //         "profileImg": "https://lh3.googleusercontent.com/a-/AOh14GiEiB0R1Mm3_ecpVu5dIq7h1AbEh9hIIC9jWmIZEg=s96-c",
  //         "timezone": 0,
  //         "lastLogin": "2021-04-09",
  //         "zoomLink": null,
  //         "student": true,
  //         "refreshToken": "1//0flMNdne7qhNNCgYIARAAGA8SNwF-L9Ir5O5q3ojAfJIcLIVNagMbwWvpHGpRvFmy3U-cLW7sFTGBf33TijIrLvO75ylUN8VZFJE"
  //       },
  //       "pending": true,
  //       "approved": false,
  //       "start": "2021-04-10T11:00:00Z",
  //       "end": "2021-04-11T13:00:00Z"
  //     },
  //     {
  //       "with": {
  //         "id": 1001,
  //         "name": "Kate D",
  //         "email": "katespb98@gmail.com",
  //         "googleKey": "116841410873596401606",
  //         "calendarId": "c477flh6pj1qrip7nc1blg0870@group.calendar.google.com",
  //         "bio": null,
  //         "profileImg": "https://lh3.googleusercontent.com/a-/AOh14GiEiB0R1Mm3_ecpVu5dIq7h1AbEh9hIIC9jWmIZEg=s96-c",
  //         "timezone": 0,
  //         "lastLogin": "2021-04-09",
  //         "zoomLink": null,
  //         "student": true,
  //         "refreshToken": "1//0flMNdne7qhNNCgYIARAAGA8SNwF-L9Ir5O5q3ojAfJIcLIVNagMbwWvpHGpRvFmy3U-cLW7sFTGBf33TijIrLvO75ylUN8VZFJE"
  //       },
  //       "pending": true,
  //       "approved": false,
  //       "start": "2021-04-10T15:00:00Z",
  //       "end": "2021-04-11T17:00:00Z"
  //     }
  //   ]


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
import React from 'react';
import {TeacherAppointment} from './TeacherAppointment';

export const TeacherAppointmentContainer = ( { teacherAppointments } ) => {
  const appointments = {
        "count": 1,
        "totalCount": 1,
        "page": 1,
        "appointments": [
            {
              "id": 1001,
              "with": {
                  "id": 101,
                  "name": "Cody Haines",
                  "email": "chaines51@gmail.com",
                  "googleKey": "107337282055510190530",
                  "calendarId": "1tdbj4e4243lhbn83oqp5hekus@group.calendar.google.com",
                  "bio": null,
                  "profileImg": "https://picsum.photos/200",
                  "timezone": 0,
                  "lastLogin": "2021-04-09",
                  "zoomLink": null,
                  "student": true,
                  "refreshToken": "1//0fJvvoKMkfoXdCgYIARAAGA8SNwF-L9IrMX2DR4XE4N3cMAMWFEZwVtZX1mifkFlFRgMNkKDgESudTxpc3HHUG9inbe__U1SCdzQ"
              },
              "pending": false,
              "approved": false,
              "start": "2021-04-28T10:00:00Z",
              "end": "2021-04-29T11:00:00Z"
            },
            {
              "id": 1001,
              "with": {
                  "id": 101,
                  "name": "Tahsin Ahmed",
                  "email": "chaines51@gmail.com",
                  "googleKey": "107337282055510190530",
                  "calendarId": "1tdbj4e4243lhbn83oqp5hekus@group.calendar.google.com",
                  "bio": null,
                  "profileImg": "https://picsum.photos/200",
                  "timezone": 0,
                  "lastLogin": "2021-04-09",
                  "zoomLink": null,
                  "student": true,
                  "refreshToken": "1//0fJvvoKMkfoXdCgYIARAAGA8SNwF-L9IrMX2DR4XE4N3cMAMWFEZwVtZX1mifkFlFRgMNkKDgESudTxpc3HHUG9inbe__U1SCdzQ"
              },
              "pending": false,
              "approved": false,
              "start": "2021-04-28T08:00:00Z",
              "end": "2021-04-29T09:00:00Z"
          },
          {
            "id": 1001,
            "with": {
                "id": 101,
                "name": "Matt Collins",
                "email": "chaines51@gmail.com",
                "googleKey": "107337282055510190530",
                "calendarId": "1tdbj4e4243lhbn83oqp5hekus@group.calendar.google.com",
                "bio": null,
                "profileImg": "https://picsum.photos/200",
                "timezone": 0,
                "lastLogin": "2021-04-09",
                "zoomLink": null,
                "student": true,
                "refreshToken": "1//0fJvvoKMkfoXdCgYIARAAGA8SNwF-L9IrMX2DR4XE4N3cMAMWFEZwVtZX1mifkFlFRgMNkKDgESudTxpc3HHUG9inbe__U1SCdzQ"
            },
            "pending": false,
            "approved": false,
            "start": "2021-04-28T12:00:00Z",
            "end": "2021-04-29T13:00:00Z"
        }
      ]
    }

  return (
    <div className="teacher-appointment-container bg-blue-600">
      <h1 className="underline text-xl mb-2 mt-3 tracking-wide">Appointments</h1>
      <div className="teacher-appointments">
        {teacherAppointments.length ? teacherAppointments.map((appointment, index) => {
          return <TeacherAppointment appointment={appointment} key={index}/>
        }) : "No upcoming appointments!"}
      </div>
    </div>
  )
}
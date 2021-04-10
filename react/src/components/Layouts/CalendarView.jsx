import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Nav } from '../Shared/Nav';
import { Footer } from '../Shared/Footer';
import { TransparentLogo } from '../Shared/TransparentLogo';
import { fetchAppointments } from '../../api.js';

export const CalendarView = () => {
  const [appts, setAppts] = useState([]);

  useEffect(() => {
    fetchAppointments()
    .then (data => {
      setAppts(parseData(data.appointments));
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

  function parseData(data) {
    return data.map(apptInfo => {
      let color = apptInfo.pending === false ? 'orange' : 'green';
      let appointment = {
        title: apptInfo.with.name,
        date: apptInfo.start,
        start: apptInfo.start,
        end: apptInfo.end,
        backgroundColor: color,
      }
      return appointment;
    })
  }

  return (
    <div className="student-home-container">
    <div className="nav-bar-container">
        <div className="nav-logo">
            <TransparentLogo />
        </div>
        <div className="nav-links">
            <Nav />
        </div>
    </div>
    <div className="calendar-container">
      <h1>My Calendar</h1>
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        contentHeight='auto'
        handleWindowResize={true}
        events={appts}
      />
    </div>
    <Footer />
</div>
  )
}
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Nav } from '../Shared/Nav'
import { Footer } from '../Shared/Footer'
import { TransparentLogo } from '../Shared/TransparentLogo';

// TODO Remove dummy data with API data
let events = [
  { title: 'Clark Jennings - French', date: '2021-04-08', start: new Date('08 April 2021 14:48 UTC').toISOString()},
  { title: 'David Bushman - Spanish', date: '2021-04-09', start: Date.now() }
];

export const CalendarView = () => {
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
        events={events}
      />
    </div>
    <Footer />
</div>
  )
}
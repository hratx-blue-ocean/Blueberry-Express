import React, { useEffect, useContext, useState } from 'react';
import { TransparentLogo } from '../Shared/TransparentLogo.jsx';
import { Nav } from '../Shared/Nav.jsx';
import { TeacherAppointmentContainer } from '../TeacherOnly/TeacherAppointmentContainer.jsx';
import { TeacherMessageContainer } from '../Shared/TeacherMessageContainer.jsx';
import { Footer } from '../Shared/Footer.jsx';
import './StudentHome.css';
import { fetchAllMessages, fetchAppointments } from '../../api.js';
import { AuthContext } from '../../auth';

export const TeacherHome = () => {
  const context = useContext(AuthContext);
  const [teacherMessages, setTeacherMessages] = useState([]);
  const [teacherAppointments, setTeacherAppointments] = useState(null);

  useEffect(() => {
    fetchAppointments()
    .then(data => {
      setTeacherAppointments(data.appointments);
    })

    fetchAllMessages()
      .then(data => {
        setTeacherMessages(data.messages);
      })
  }, []);

  return (
    <div>
      <div className="nav-bar-container">
        <div className="nav-logo">
          <TransparentLogo />
        </div>
        <div className="nav-links">
          <Nav />
        </div>
      </div>
      <h1 className="welcome-teacher">Welcome back, {context.user.name}!</h1>
      <div className="flex justify-around mt-5">
        <TeacherAppointmentContainer teacherAppointments={teacherAppointments}/>
        <TeacherMessageContainer messages={teacherMessages}/>
      </div>
      <Footer />
    </div>
  )
}
import React, { useEffect, useContext, useState } from 'react';
import { TransparentLogo } from '../Shared/TransparentLogo.jsx';
import { Nav } from '../Shared/Nav.jsx';
import { SearchBar } from '../StudentOnly/SearchBar.jsx';
import { StudentAppointmentsContainer } from '../StudentOnly/StudentAppointmentsContainer.jsx';
import { MessagesContainer } from '../Shared/MessagesContainer.jsx';
import { TeacherContainer } from '../StudentOnly/TeacherContainer.jsx';
import { Footer } from '../Shared/Footer.jsx';
import './StudentHome.css';
import { fetchAllLanguages, searchTeacherByLanguage, fetchAllMessages, fetchAppointments } from '../../api';
import { AuthContext } from '../../auth';

export const StudentHome = () => {
  const context = useContext(AuthContext);
  const [studentMessages, setStudentMessages] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [preferredLanguage, setPreferredLanguage] = useState(1);
  const [teacherList, setTeacherList] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect( () => {
    fetchAppointments()
      .then(data => {
        setAppointments(data.appointments);
      })

    fetchAllLanguages()
      .then(data => {
        setLanguages(data.languages);
      })

    fetchAllMessages()
      .then(data => {
        setStudentMessages(data.messages);
      })
  }, []);

  useEffect( async () => {
    let teacher = await searchTeacherByLanguage(preferredLanguage)
    setTeacherList(teacher.users)
  }, [preferredLanguage])


  return (
    <div className="student-home-container">
      <div className="nav-bar-container">
        <div className="nav-logo">
          <TransparentLogo />
        </div>
        <SearchBar languages={languages} setPreferredLanguage={setPreferredLanguage}/>
        <div className="nav-links">
          <Nav />
        </div>
      </div>
      <div className="flex justify-around mt-5">
        <StudentAppointmentsContainer appointments={appointments}/>
        <TeacherContainer className="shadow-md" teacherList={teacherList}/>
        <MessagesContainer messages={studentMessages} />
      </div>
      <Footer />
    </div>
  )
}
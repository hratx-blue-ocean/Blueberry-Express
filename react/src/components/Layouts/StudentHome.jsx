import React, { useEffect, useConext, useState } from 'react';
import { TransparentLogo } from '../Shared/TransparentLogo.jsx';
import { Nav } from '../Shared/Nav.jsx';
import { SearchBar } from '../StudentOnly/SearchBar.jsx';
import { StudentAppointmentsContainer } from '../StudentOnly/StudentAppointmentsContainer.jsx';
import { MessagesContainer } from '../Shared/MessagesContainer.jsx';
import { TeacherContainer } from '../StudentOnly/TeacherContainer.jsx';
import { Footer } from '../Shared/Footer.jsx';
import './StudentHome.css';
import { fetchAllMessages } from '../../api';
import { fetchAllLanguages } from '../../api';

export const StudentHome = () => {
    const [studentMessages, setStudentMessages] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [preferredLanguage, setPreferredLanguage] = useState('');

  useEffect(() => {
    fetchAllLanguages()
      .then(data => {
        setLanguages(data.languages);
      })

    fetchAllMessages()
      .then(data => {
        setStudentMessages(data.messages);
      })
  }, []);

    return (
        <div className="student-home-container">
            <div className="nav-bar-container">
                <div className="nav-logo">
                    <TransparentLogo />
                </div>
                <SearchBar languages={languages}/>
                <div className="nav-links">
                    <Nav />
                </div>
            </div>
            <div className="flex justify-around mt-5">
                <StudentAppointmentsContainer />
                <TeacherContainer className="shadow-md" />
                <MessagesContainer messages={studentMessages}/>
            </div>
            <Footer />
        </div>
    )
}
import React from 'react';
import { Logo } from '../Shared/Logo.jsx';
import { Nav } from '../Shared/Nav.jsx';
import { SearchBar } from '../StudentOnly/SearchBar.jsx';
import { StudentAppointmentsContainer } from '../StudentOnly/StudentAppointmentsContainer.jsx';
import { MessagesContainer } from '../Shared/MessagesContainer.jsx';
import { TeacherContainer } from '../StudentOnly/TeacherContainer.jsx';
import { Footer } from '../Shared/Footer.jsx';

export const StudentHome = () => {
    return (
        <div>
          <div className="flex justify-between items-center">
            <Logo />
            <SearchBar />
            <Nav />
          </div>
          <div className="flex justify-around items-center h-full mt-5">
            <StudentAppointmentsContainer />
            <TeacherContainer />
            <MessagesContainer />
          </div>
            <Footer />
        </div>
    )
}
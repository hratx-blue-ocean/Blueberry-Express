import React from 'react';
import { TransparentLogo } from '../Shared/TransparentLogo.jsx';
import { Nav } from '../Shared/Nav.jsx';
import { SearchBar } from '../StudentOnly/SearchBar.jsx';
import { StudentAppointmentsContainer } from '../StudentOnly/StudentAppointmentsContainer.jsx';
import { MessagesContainer } from '../Shared/MessagesContainer.jsx';
import { TeacherContainer } from '../StudentOnly/TeacherContainer.jsx';
import { Footer } from '../Shared/Footer.jsx';
import './StudentHome.css';

export const StudentHome = () => {
    return (
        <div className="student-home-container">
            <div className="nav-bar-container">
                <div className="nav-logo">
                    <TransparentLogo />
                </div>
                <SearchBar />
                <div className="nav-links">
                    <Nav />
                </div>
            </div>
            <div className="flex justify-around mt-5">
                <StudentAppointmentsContainer />
                <TeacherContainer className="shadow-md" />
                <MessagesContainer />
            </div>
            <Footer />
        </div>
    )
}
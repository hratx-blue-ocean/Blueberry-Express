import React from 'react';
import { TransparentLogo } from '../Shared/TransparentLogo.jsx';
import { Nav } from '../Shared/Nav.jsx';
import { TeacherAppointmentContainer } from '../TeacherOnly/TeacherAppointmentContainer.jsx';
import { TeacherMessageContainer } from '../Shared/TeacherMessageContainer.jsx';
import { Footer } from '../Shared/Footer.jsx';
import './StudentHome.css';

export const TeacherHome = () => {
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
            <h1 className="welcome-teacher">Welcome back, Teacher!</h1>
            <div className="flex justify-around mt-5">
                <TeacherAppointmentContainer />
                <TeacherMessageContainer />
            </div>
            <Footer />
        </div>
    )
}
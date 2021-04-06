import React from 'react';
import { Logo } from '../Shared/Logo.jsx';
import { Nav } from '../Shared/Nav.jsx';
import { TeacherAppointmentContainer } from '../TeacherOnly/TeacherAppointmentContainer.jsx';
import { MessagesContainer } from '../Shared/MessagesContainer.jsx';
import { Footer } from '../Shared/Footer.jsx';

export const TeacherHome = () => {
    return (
        <div className="overflow-hidden">
            <div className="flex justify-between items-center px-7 py-5 border-b">
                <Logo />
                <h1 className="text-4xl italic -ml-96">Welcome back, Teacher!</h1>
                <Nav />
            </div>
            <div className="flex justify-around items-center h-full mt-5 border border-black p-10 m-6 overflow-hidden relative">
                <TeacherAppointmentContainer />
                <MessagesContainer />
            </div>
            <Footer />
        </div>
    )
}
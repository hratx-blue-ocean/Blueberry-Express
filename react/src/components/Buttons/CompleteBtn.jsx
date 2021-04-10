import React from 'react';
import { deleteAppointment } from '../../api';


export const CompleteBtn = ({label, handleClick, appointmentId}) => {

    return (
        <button
        type="button"
        className="h-12 px-6 m-2 text-lg text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-800"
        onClick={async () => {
            await deleteAppointment(appointmentId);
            handleClick(true); 
        }}
        >{label}
        </button>
    )
}
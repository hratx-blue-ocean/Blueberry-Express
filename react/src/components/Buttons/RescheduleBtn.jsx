import React from 'react';


export const RescheduleBtn = ({label, handleClick, reschedule}) => {
    return (
        <button
        type="button"
        className="h-15 w-48 p-2 text-xl text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-800"
        onClick={() => {
            reschedule(true);
            handleClick();
        }}
        > {label}
        </button>
    )
}
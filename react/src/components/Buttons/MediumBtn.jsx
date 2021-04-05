import React from 'react';


export const MediumBtn = ({label, handleClick}) => {
    return (
        <button
        type="button"
        className="h-10 px-5 m-2 text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-800"
        onClick={handleClick}
        > {label}
        </button>
    )
}
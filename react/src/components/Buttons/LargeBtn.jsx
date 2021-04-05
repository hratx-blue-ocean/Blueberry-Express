import React from 'react';


export const LargeBtn = ({label, handleClick}) => {
    return (
        <button
        type="button"
        className="h-12 px-6 m-2 text-lg text-white transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800"
        onClick={handleClick}
        > {label}
        </button>
    )
}
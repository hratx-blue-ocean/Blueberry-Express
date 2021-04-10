import React from 'react';


export const MattsBtn = ({label, handleClick}) => {
    return (
        <button
        type="button"
        className="h-15 w-48 p-2 text-xl text-black transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-gray-400"
        onClick={handleClick}
        >{label}
        </button>
    )
}
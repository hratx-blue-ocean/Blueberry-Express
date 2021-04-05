import React from 'react';


export const SmallBtn = ({label, handleClick}) => {
    return (
        <button
        type="button"
        className="h-8 px-4 m-2 text-sm text-white transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-blue-800"
        onClick={handleClick}
        > {label}
        </button>
    )
}
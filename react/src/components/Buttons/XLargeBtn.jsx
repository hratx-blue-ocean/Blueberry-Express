import React from 'react';


export const XLargeBtn = ({label, handleClick}) => {
    return (
        <button
        type="button"
        className="h-15 w-48 p-2 text-xl text-black transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-gray-300"
        onClick={handleClick}
        > {label}
        </button>
    )
}
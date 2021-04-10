import React from 'react';


export const RoleSelectBtn = ({label, handleClick, id}) => {
    return (
        <button
        id={id}
        type="button"
        className="h-12 px-6 m-2 text-lg text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline focus:bg-blue-800 hover:bg-blue-800"
        onClick={handleClick}
        >{label}
        </button>
    )
}
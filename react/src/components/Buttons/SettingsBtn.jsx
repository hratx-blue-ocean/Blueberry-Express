import React from 'react';


export const SettingsBtn = ({label, handleClick}) => {
    return (
        <button
        type="button"
        className="h-12 px-6 m-2 text-lg w-48 text-black transition-colors duration-150 bg-white rounded-lg focus:shadow-outline hover:bg-gray-300"
        onClick={handleClick}
        >{label}
        </button>
    )
}
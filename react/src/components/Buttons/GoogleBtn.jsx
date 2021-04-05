import React from 'react';


const GoogleBtn = ({label, handleClick}) => {
  return (
    <button
    type="button"
    className="flex justify-center items-center h-10 text-black transition-colors duration-150 bg-black-600 rounded-lg focus:shadow-outline border-2"
    onClick={handleClick}>
      <img src="assets/googleIcon.svg" className="w-10 h-10  border-r"></img>
      <h1 className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold px-4 py-2 rounded-r">
      {label}
        </h1>
    </button>
  )
}

export default GoogleBtn;
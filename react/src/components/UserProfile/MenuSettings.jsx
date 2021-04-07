import React from 'react';

export const MenuSettings = () => {
  return (
    <div className="student-appointment-container  bg-blue-600">
      <div className="flex flex-col mt-20 gap-20 justify-around items-center">
        <button className="bg-white text-black rounded-md w-40 h-20">
          Personal Info
        </button>
        <button className="bg-white text-black rounded-md w-40 h-20">
          Languanges
        </button>
        <button className="bg-white text-black rounded-md w-40 h-20">
          Ratings
        </button>
      </div>
    </div>
  )
}
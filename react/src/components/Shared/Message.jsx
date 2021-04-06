import React from 'react';

export const Message = ({ message }) => {
  return (
    <div className="flex justify-around items-center bg-white text-black border-black w-4/5 mb-6 rounded-md h-16">
      <p>{message.from}</p>
      <p className="w-2/5">{message.subject}</p>
      <p>{message.created_at}</p>
    </div>
  )
}
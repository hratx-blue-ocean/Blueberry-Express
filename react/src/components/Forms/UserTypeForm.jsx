import React from 'react';
import { RoleSelectBtn } from '../Buttons/RoleSelectBtn';
import { Logo } from '../Shared/Logo';

export const UserTypeForm = ({ action, setType }) => {

  return (
    <div>
        <Logo/>
        <div className="relative max-w-md mx-auto max-h-full mt-10 border shadow-md rounded-md">
          <h1 className="flex justify-center text-2xl p-10">
            What Are You Interested In?
          </h1>
          <div className="flex justify-center h-40">
            <RoleSelectBtn id="teacher" label="Teacher" handleClick={setType} />
            <RoleSelectBtn id="student" label="Student" handleClick={setType} />
          </div>
        </div>
    </div>
  )
}
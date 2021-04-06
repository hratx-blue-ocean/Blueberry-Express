import React from 'react';
import { ContinueBtn } from '../Buttons/ContinueBtn';
import { RoleSelectBtn } from '../Buttons/RoleSelectBtn';
import { Logo } from '../Shared/Logo';

export const TeachVLearnModal = () => {
  return (
    <div>
        <Logo/>
        <div className="relative max-w-md mx-auto max-h-full mt-10 border shadow-md rounded-md">
          <h1 className="flex justify-center text-3xl p-10">
            What Are You Interested In?
          </h1>
          <div className="flex justify-center h-40">
            <RoleSelectBtn className="focus:bg-blue-800" label="Teaching" />
            <RoleSelectBtn label="Learning"/>
          </div>
          <div className="absolute bottom-0 right-0">
            <ContinueBtn/>
          </div>
        </div>
    </div>
  )
}
import React from 'react';
import { ContinueBtn } from '../Buttons/ContinueBtn';
import { PreviousBtn } from '../Buttons/PreviousBtn';
import { Logo } from '../Shared/Logo';
import { LanguageSelection } from '../Shared/LanguageSelection';

export const StudLangModal = () => {
  return (
    <div>
        <Logo/>
        <div className="relative max-w-md mx-auto max-h-full mt-10 border shadow-md rounded-md">
          <h1 className="flex justify-center text-3xl text-white bg-blue-600 box-content p-10 rounded-md">
            What languages are you interested in learning?
          </h1>
          <div className="flex justify-center">
            <LanguageSelection languages={["English", "Spanish", "Japanese", "German", "French", "Korean"]}/>
          </div>
          <div  className="absolute bottom-0 right-0 flex justify-end">
          <ContinueBtn/>
          </div>
          <div  className="absolute bottom-0 left-0 flex justify-end">
          <PreviousBtn/>
          </div>
        </div>
    </div>
  )
}
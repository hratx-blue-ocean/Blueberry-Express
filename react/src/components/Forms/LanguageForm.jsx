import React, { useContext } from 'react';
import { ContinueBtn } from '../Buttons/ContinueBtn';
import { Logo } from '../Shared/Logo';
import { LanguageSelection } from '../Shared/LanguageSelection';
import { AuthContext } from '../../auth';

export const LanguageForm = ({ action, userType }) => {
  const context = useContext(AuthContext);
  let header;

  if (context.user.type === 'teacher' || userType === 'teacher') {
    header = 'What languages are you interested in teaching?';
  } else {
    header = 'What languages are you interested in learning?';
  }

  return (
    <div>
        <Logo/>
        <div className="relative max-w-md mx-auto max-h-full mt-10 border shadow-md rounded-md">
          <h1 className="flex justify-center text-3xl text-white bg-blue-600 box-content p-10 rounded-md">
            {header}
          </h1>
          <div className="flex justify-center h-50 p-15">
            <LanguageSelection />
          </div>
          <div  className="absolute bottom-0 right-0 flex justify-end">
            <ContinueBtn handleClick={action} />
          </div>
        </div>
    </div>
  )
}
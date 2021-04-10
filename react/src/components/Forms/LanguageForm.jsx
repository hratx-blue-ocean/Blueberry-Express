import React, { useContext } from 'react';
import { ContinueBtn } from '../Buttons/ContinueBtn';
import { LanguageSelection } from '../Shared/LanguageSelection';
import { AuthContext } from '../../auth';

export const LanguageForm = ({ action, userType }) => {
  const context = useContext(AuthContext);
  let header;

  if (context.user.type === 'teacher' || userType === 'teacher') {
    header = 'What language(s) would you like to teach?';
  } else {
    header = 'What language(s) would you like to learn?';
  }

  return (
    <div>
      <div className="relative max-w-md mx-auto max-h-full mt-10 border shadow-md rounded-md">
        <h1 className="flex justify-center text-3xl text-white bg-blue-600 box-content p-10 rounded-md">
          {header}
        </h1>
        <div className="flex justify-center h-50 p-15 mb-7">
          <LanguageSelection action={action} />
        </div>
      </div>
    </div>
  )
}
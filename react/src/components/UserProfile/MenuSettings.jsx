import React from 'react';
import { LargeBtn } from '../Buttons/LargeBtn'

export const MenuSettings = ( {userType, action, curPage } ) => {
  return (
    <div className="MenuSettingsContainer bg-blue-600">
      <div className="flex flex-col mt-20 gap-20 justify-around items-center">
        <LargeBtn label="Personal Info" handleClick={action}>
        </LargeBtn>
        <LargeBtn label="Languages" handleClick={action}>
        </LargeBtn>
        {(userType === 'teacher') && <LargeBtn label="Ratings" handleClick={action}>
        </LargeBtn>}
      </div>
    </div>
  )
}
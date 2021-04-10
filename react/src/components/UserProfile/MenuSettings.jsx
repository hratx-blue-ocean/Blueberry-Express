import React from 'react';
import { LargeBtn } from '../Buttons/LargeBtn'
import { SetAvailabilityModal } from '../Modals/SetAvailabilityModal';

export const MenuSettings = ( {userType, action, curPage } ) => {
  return (
    <div className="menu-settings-container">
      <h1 className="text-white underline text-xl mt-4 mb-4">Settings</h1>
      <div className="menu-container mb-4">
        <LargeBtn label="Personal Info" handleClick={action}/>
        <LargeBtn label="Languages" handleClick={action}/>
        {(userType === 'teacher') && <LargeBtn label="Ratings" handleClick={action}/>}
        {(userType === 'teacher') && <SetAvailabilityModal />}
      </div>
    </div>
  )
}
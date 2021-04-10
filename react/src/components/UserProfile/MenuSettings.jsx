import React from 'react';
import { SettingsBtn } from '../Buttons/SettingsBtn'
import { SetAvailabilityModal } from '../Modals/SetAvailabilityModal';

export const MenuSettings = ({ userType, action, curPage }) => {
  return (
    <div className="menu-settings-container">
      <h1 className="text-white underline text-xl mt-4 mb-6">Settings</h1>
      <div className="menu-container mb-4">
        <div className="mb-7">
          <SettingsBtn label="Personal Info" handleClick={action} />
        </div>
        <div className="mb-7">
          <SettingsBtn label="Languages" handleClick={action} />
        </div>
        <div className="mb-7">
          {(userType === 'teacher') && <SettingsBtn label="Ratings" handleClick={action} />}
        </div>
        <div className="mb-7">
          {(userType === 'teacher') && <SetAvailabilityModal />}
        </div>
      </div>
    </div>
  )
}
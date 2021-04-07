import React from 'react';
import {ProfilePic} from '../Shared/ProfilePic';
import {MediumBtn} from '../Buttons/MediumBtn';
import { AvailabilityModal } from '../Modals/AvailabilityModal';

export const Teacher = ({ user }) => {
  return (
    <div className="individual-teacher">
      <div>
        <ProfilePic url={user.profile_picture} name={user.name}/>
      </div>
      <div>
        <p className="mb-5">Bio: {user.bio}</p>
        <p>Languages:&nbsp;
          {user.languages.map((language, index) => {
            return <span key={index}>{language}{index < user.languages.length - 1 ? ',' : null} </span>
          })}
        </p>
      </div>
      <div>
        <AvailabilityModal />
      </div>
    </div>
  )
}
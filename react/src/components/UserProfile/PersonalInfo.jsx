import React, { useContext } from 'react';
import { AuthContext } from '../../auth';
import './PersonalInfo.css';
import { ProfilePic } from '../Shared/ProfilePic';
import { MediumBtn } from '../Buttons/MediumBtn';

export const PersonalInfo = () => {
  const context = useContext(AuthContext);
  return (
    <div>
      <div className="personal-info-container ">
        <h1 className="text-center text-2xl pt-5 underline font-bold">Profile Info</h1>
        <div className="personal-info">
          <img width="200" height="200" className="personal-info-image shadow-xl" src={context.user.profileImg} />
          <div className="personal-info-bio">
              <p className="text-xl pb-5"><span className="profile-info-span mr-1">Name:</span> {context.user.name}</p>
              <p className="text-xl"><span className="profile-info-span mr-1">Bio:</span> Thinker. Devoted pop culture scholar. Music practitioner. Award-winning alcohol geek. Web fan.</p>
          </div>
        </div>
        <div className="personal-info-button mt-16">
          <MediumBtn label={'Submit'} />
        </div>
      </div>

      <img className="profile-info-img" src="/assets/profileinfo.png"></img>
    </div>
  )
}
import React from 'react';
import {ProfilePic} from '../Shared/ProfilePic';
import {LargeBtn} from '../Buttons/LargeBtn';

export const Teacher = ({ user }) => {
  return (
    <div className="flex justify-between items-center border-b border-black mb-2 p-4">
      <div>
        <ProfilePic url={user.profile_picture} name={user.name}/>
      </div>
      <div className="flex flex-col justify-between h-20">
        <p>Bio: {user.bio}</p>
        <p>Languages:&nbsp;
          {user.languages.map((language, index) => {
            return <span key={index}>{language}{index < user.languages.length - 1 ? ',' : null} </span>
          })}
        </p>
      </div>
      <div>
        <LargeBtn label={'Check Availability'}/>
      </div>
    </div>
  )
}
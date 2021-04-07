import React from 'react';
import './PersonalInfo.css';
import {ProfilePic} from '../Shared/ProfilePic';

export const PersonalInfo = () => {
  return (
    <div className="container">
      <div className="flex flex-col mt-20 gap-20 justify-around items-center">
        <div className="pfp">
        <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'>
        </img>
          Change profile pic
        </div>
        <div className="textFields">
          <div className="preferredName">
            Preferred Name
          <input type="text" className="preferredNameText" placeholder="username">
          </input>
          </div>
          <div className="preferredLanguage">
            Preferred Language
          <input type="text" className="preferredLanguageText" placeholder="language">
          </input>
          </div>
        </div>
        </div>
    </div>
  )
}
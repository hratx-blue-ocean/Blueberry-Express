import React, {useContext} from 'react';
import { AuthContext } from '../../auth';
import './PersonalInfo.css';
import {ProfilePic} from '../Shared/ProfilePic';

export const PersonalInfo = () => {
  const context = useContext(AuthContext);
  return (
    <div className="container">
      <div className="flex flex-col mt-20 gap-20 justify-around items-center">
        <div className="pfp">
        <img src={context.user.profileImg}>
        </img>
        </div>
        <div className="textFields">
          <div className="preferredName">
            Name: {context.user.name}
          </div>
        </div>
        </div>
    </div>
  )
}
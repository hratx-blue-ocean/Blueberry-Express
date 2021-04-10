import React, {useEffect, useState} from 'react';
import {ProfilePic} from '../Shared/ProfilePic';
import {MediumBtn} from '../Buttons/MediumBtn';
import { AvailabilityModal } from '../Modals/AvailabilityModal';
import { fetchOtherUser } from '../../api';

export const Teacher = ({ user }) => {
  return (
    <div className="individual-teacher">
      <div>
        <ProfilePic url={user.profileImg} name={user.name}/>
      </div>
      <div>
        <p className="mb-5">Hello I am happy to be here and teach.{user.bio}</p>
        <p>Languages: {user.languages.map(({name}) => name).join(', ')}</p>
      </div>
      <div>
        <AvailabilityModal id={user.id}/>
      </div>
    </div>
  )
}
// import React, {useEffect, useState} from 'react';
// import {ProfilePic} from '../Shared/ProfilePic';
// import {MediumBtn} from '../Buttons/MediumBtn';
// import { AvailabilityModal } from '../Modals/AvailabilityModal';
// import { fetchOtherUser } from '../../api';

// export const Teacher = ({ user }) => {
//   return (
//     <div className="individual-teacher">
//       <div>
//         <ProfilePic url={user.profileImg} name={user.name}/>
//       </div>
//       <div className="individual-teacher-bio">
//         <p className="mb-5">Hello I am happy to be here and teach.{user.bio}</p>
//         <p>Languages: {user.languages.map(({name}) => name).join(', ')}</p>
//       </div>
//       <div>
//         <AvailabilityModal id={user.id}/>
//       </div>
//     </div>
//   )
// }

import React, {useEffect, useState} from 'react';
import {ProfilePic} from '../Shared/ProfilePic';
import {MediumBtn} from '../Buttons/MediumBtn';
import { AvailabilityModal } from '../Modals/AvailabilityModal';
import { fetchOtherUser } from '../../api';

export const Teacher = ({ user }) => {
  let teacherBio = ['Hello, I am happy to be here and teach', 'You is kind, you is smart, you is important', 'Be more than what you are worth', 'The best of me is yet to come', 'Hi, my hobbies include breakfast, lunch, and dinner', 'A very caffeine dependant life form', 'Always aiming to be a rainbow at the end of a thunderstorm', 'Kind of a good samaritan, terrible athlete, but extremely blessed in the napping skills department.', 'Just keep swimming', 'Living vicariously through myself', 'Here to serve… The cat overlord', 'Hard work never killed anyone, but why take the chance?', 'Just over here having an allergic reaction to everyday life', 'Life is really short, try to smile while you still have all of your teeth', 'Time is precious, waste it wisely', 'Silent people tend to have the loudest minds', 'I’m here to avoid friends on Facebook', 'You know what I like about people? Their dogs', 'I might look like I’m doing nothing, but in my head I’m quite busy'];
  return (
    <div className="individual-teacher">
      <div>
        <ProfilePic url={user.profileImg} name={user.name}/>
      </div>
      <div className="individual-teacher-bio">
        <p className="mb-5"><strong>Status: </strong>{teacherBio[Math.floor(Math.random()*teacherBio.length)]}</p>
        <p ><strong>Languages: </strong>{user.languages.map(({name}) => name).join(', ')}</p>
      </div>
      <div>
        <AvailabilityModal id={user.id}/>
      </div>
    </div>
  )
}
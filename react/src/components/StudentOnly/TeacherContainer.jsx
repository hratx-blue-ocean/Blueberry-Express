import React from 'react';
import { Teacher } from './Teacher.jsx';

export const TeacherContainer = () => {

  // TODO: Remove dummyData with API request Data.

  const dummyData = [
    {
      id: 1,
      name: 'Matt',
      bio: 'I am your teacher',
      languages: ['English', 'Korean', 'French'],
      profile_picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    {
      id: 2,
      name: 'Tahsin',
      bio: 'I am your teacher',
      languages: ['English', 'Korean', 'French'],
      profile_picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    {
      id: 3,
      name: 'Brandon',
      bio: 'I am your teacher',
      languages: ['English', 'Korean', 'French'],
      profile_picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    }
  ]

  return (
    <div className="w-2/5">
      <h1>Welcome back, Student!</h1>
      <div className="bg-gray-200 rounded-xl pb-1">
        {dummyData.map((user, index) => {
          return <Teacher user={user} key={index} />
        })}
      </div>
    </div>
  )
}
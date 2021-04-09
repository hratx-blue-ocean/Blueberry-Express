import React, { useContext, useEffect, useState } from 'react';
import { Teacher } from './Teacher.jsx';
import { AuthContext } from '../../auth';


export const TeacherContainer = ({ teacherList}) => {
  const context = useContext(AuthContext);



  // TODO: Remove dummyData with API request Data.
  // const dummyData = [
  //   {
  //     id: 1,
  //     name: 'Matt',
  //     bio: 'I am your teacher',
  //     languages: ['English', 'Korean', 'French'],
  //     profile_picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  //   },
  //   {
  //     id: 2,
  //     name: 'Tahsin',
  //     bio: 'I am your teacher',
  //     languages: ['English', 'Korean', 'French'],
  //     profile_picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  //   },
  //   {
  //     id: 3,
  //     name: 'Brandon',
  //     bio: 'I am your teacher',
  //     languages: ['English', 'Korean', 'French'],
  //     profile_picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  //   },
  //   {
  //     id: 3,
  //     name: 'Brandon',
  //     bio: 'I am your teacher',
  //     languages: ['English', 'Korean', 'French'],
  //     profile_picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  //   },
  //   {
  //     id: 3,
  //     name: 'Brandon',
  //     bio: 'I am your teacher',
  //     languages: ['English', 'Korean', 'French'],
  //     profile_picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  //   }
  // ]



  return (
    <div className="teacher-list-container">
      <h1 className="welcome-back">Welcome back, {context.user.name}!</h1>
      <div className="teacher-container">
        {teacherList ? teacherList.map((user, index) => {
          return <Teacher user={user} key={index} />
        }) : null}
      </div>
    </div>
  )
}
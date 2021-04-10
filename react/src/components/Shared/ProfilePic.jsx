import React from 'react';

export const ProfilePic = ( {url, name} ) => (
  <div className="text-center w-24">
    <img src={url} className="teacher-profile-pic w-24 h-24 rounded-full " />
    <p className="mt-1">{name}</p>
  </div>
);



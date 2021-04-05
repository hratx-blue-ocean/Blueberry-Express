import React from 'react';

export const ProfilePic = ( {url, name} ) => (
  <div>
    <img src={url} className="object-cover w-24 h-24 border-2 border-black rounded-full" />
    <p>{name}</p>
  </div>
);


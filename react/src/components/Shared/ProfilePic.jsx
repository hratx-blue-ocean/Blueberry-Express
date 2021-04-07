import React from 'react';

export const ProfilePic = ( {url, name} ) => (
  <div className="text-center">
    <img src={url} className="object-cover w-24 h-24 rounded-full" />
    <p className="mt-1">{name}</p>
  </div>
);



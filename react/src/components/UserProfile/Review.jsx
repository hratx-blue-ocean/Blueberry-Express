import React from 'react';
import { ProfilePic } from '../Shared/ProfilePic.jsx';
import { StaticRating } from '../Shared/Star.jsx';

export const Review = ({ review }) => {
  return (
    <div className="individual-review">
      <div>
        <ProfilePic url="assets/logo_icon.png" name={review.reviewer} />
      </div>
      <div className="w-4/5 text-left ml-5">
        <StaticRating rating={review.rating} />
        <div className="bg-white rounded p-2">
          <p className="text-black text-sm">{review.body}</p>
        </div>
        <span className="reviews-date">created at: {review.created_at}</span>
      </div>
    </div>
  )
}
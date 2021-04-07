import React from 'react';
import { Review } from './Review.jsx';

  //To-Do - Remove Dummy data for real data
  let reviewsArray = [
    {
      id: '1',
      reviewer: 'Matt',
      rating: 5,
      created_at: '4/5/21',
      body: "Cody was an amazing teacher! I mean the guy literally knows everything. If you want to learn Klingon super fast then Cody is your guy"
    },
    {
      id: '2',
      reviewer: 'Tahsin',
      rating: 4,
      created_at: '4/5/21',
      body: "I really liked Cody's teaching methods but things got kinda weird when we took a screenshot of me and then put it has his background. Then he made it into a gif which again was awesome but it was hard to focus on learning when I constantly had to look at myself as his background on zoom"
    },
    {
      id: '3',
      reviewer: 'Brandon',
      rating: 5,
      created_at: '4/5/21',
      body: "Cody is dope."
    },
  ]

export const ReviewsContainer = () => {
  return (
    <div className="reviews-container w-2/3 bg-blue-600">
      <h2 className="reviews-header tracking-wide">My Reviews</h2>
      <div>
      {reviewsArray.map((review, index) => {
        return <Review review={review} key={index}/>
      })}
      </div>
    </div>
  )
}
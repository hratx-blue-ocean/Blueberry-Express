import React from 'react';
import { TransparentLogo } from '../Shared/TransparentLogo.jsx';
import { Nav } from '../Shared/Nav.jsx';
import { Footer } from '../Shared/Footer.jsx';
import { MenuSettings} from '../UserProfile/MenuSettings';
import { PersonalInfo } from '../UserProfile/PersonalInfo';
import { ReviewsContainer } from '../UserProfile/ReviewsContainer';
import { SmallBtn } from '../Buttons/SmallBtn';
import './UserProfile.css';

export const UserProfileReviews = ( { userType } ) => {
    return (
        <div className="student-home-container">
            <div className="nav-bar-container">
                <div className="nav-logo">
                    <TransparentLogo />
                </div>
                <div className="nav-links">
                    <Nav />
                </div>
            </div>
            <div className="flex justify-center ml-80">
            Reviews
            </div>
            <div></div>
            <div className="flex gap-20">
              <MenuSettings/>
            <div className="flex justify-around mt-5">
            </div>
              <div className="reviews">
                <ReviewsContainer />
              </div>
            </div>
              <Footer />
        </div>
    )
}
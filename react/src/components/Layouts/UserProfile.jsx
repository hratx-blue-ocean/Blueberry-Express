import React, { useEffect, useState } from "react";
import { TransparentLogo } from '../Shared/TransparentLogo.jsx';
import { Nav } from '../Shared/Nav.jsx';
import { Footer } from '../Shared/Footer.jsx';
import { MenuSettings} from '../UserProfile/MenuSettings';
import { PersonalInfo } from '../UserProfile/PersonalInfo';
import { SmallBtn } from '../Buttons/SmallBtn';
import { ReviewsContainer } from '../UserProfile/ReviewsContainer';
import { LanguageSelection } from '../Shared/LanguageSelection';
import './UserProfile.css';

export const UserProfile = ( { userType } ) => {
    const [page, setPage] = useState('main');

    var mainPage = (
        <div className="student-home-container">
            <div className="nav-bar-container">
                <div className="nav-logo">
                    <TransparentLogo />
                </div>
                <div className="nav-links">
                    <Nav />
                </div>
            </div>
            <div className="flex justify-center">
            Profile
            </div>
            <div></div>
            <div className="flex gap-20">
            <MenuSettings userType={userType}/>
            <div className="flex justify-around mt-5">
            </div>
            <PersonalInfo/>
            <div className="smallbtn2">
            <SmallBtn label={'Submit'}/>
            </div>
            </div>
            <Footer />
        </div>
    );

    var langPage = (
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
                Language Selection
                </div>
                <div></div>
                <div className="flex gap-20">
                <MenuSettings/>
                <div className="flex justify-around mt-5">
                </div>
                <div className="container flex justify-around">
                <LanguageSelection languages={["English", "Spanish", "Japanese", "German", "French", "Korean"]}/>
                <div className="smallbtn">
                <SmallBtn label={'Submit'}/>
                </div>
                </div>
                </div>
                <Footer />
            </div>
    )

    var reviewsPage = (
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



    return (
        {(page === 'main') && mainPage};
    )


}
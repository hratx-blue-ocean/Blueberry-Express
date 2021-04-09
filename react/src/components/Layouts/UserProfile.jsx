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
import axios from 'axios';


export const UserProfile = ( { userType } ) => {
    const [page, setPage] = useState('Personal Info');
    const [languages, setLanguages] = useState(["English", "Spanish", "Japanese", "German", "French", "Korean"]);


    function choosePage(e) {
        setPage(e.target.innerHTML);
    }



    //main page
    var mainPage = (
        <div className="student-home-container">
            <div className="nav-bar-container">
                <div className="nav-logo">
                    <TransparentLogo />
                </div>
                <div className="nav-links">
                    <Nav/>
                </div>
            </div>
            <div className="flex justify-center">
                Profile
            </div>
            <div className="flex gap-20">
                <MenuSettings userType={userType} curPage={page} action={choosePage}/>
                <div className="flex justify-around mt-5"></div>
                    <PersonalInfo/>
                <div className="smallbtn2">
                    <SmallBtn label={'Submit'}/>
                </div>
            </div>
            <Footer />
        </div>
    );


    //languages page
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
                <div className="flex gap-20">
                    <MenuSettings userType={userType} curPage={page} action={choosePage}/>
                    <div className="flex justify-around mt-5">
                </div>
                    <div className="container flex justify-around">
                        <LanguageSelection/>
                    </div>
                </div>
                <Footer />
            </div>
    )


    //reviews page
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
                <div className="flex gap-20">
                    <MenuSettings userType={userType} action={choosePage}/>
                <div className="flex justify-around mt-5"></div>
                    <div className="reviews">
                    <ReviewsContainer />
                    </div>
                </div>
                <Footer />
            </div>
    )


    return (
        page === 'Personal Info' && mainPage || page === 'Languages' && langPage || page === 'Ratings' && reviewsPage
    )
}
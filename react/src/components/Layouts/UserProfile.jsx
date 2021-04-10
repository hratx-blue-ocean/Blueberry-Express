import React, { useEffect, useState, useContext } from "react";
import { TransparentLogo } from '../Shared/TransparentLogo.jsx';
import { Nav } from '../Shared/Nav.jsx';
import { Footer } from '../Shared/Footer.jsx';
import { MenuSettings } from '../UserProfile/MenuSettings';
import { PersonalInfo } from '../UserProfile/PersonalInfo';
import { SmallBtn } from '../Buttons/SmallBtn';
import { ReviewsContainer } from '../UserProfile/ReviewsContainer';
import { LanguageSelection } from '../Shared/LanguageSelection';
import { AuthContext } from '../../auth';
import { setUserLanguages } from './../../api.js';
import './UserProfile.css';
import axios from 'axios';


export const UserProfile = ({ userType }) => {
    const [page, setPage] = useState('Personal Info');
    const context = useContext(AuthContext);


    function choosePage(e) {
        setPage(e.target.innerHTML);
    }

    function submitChange(e) {
        e.preventDefault();
        e.target.style.backgroundColor = 'green';
        const selected = [...document.querySelectorAll('input[type=checkbox]:checked')];
        setUserLanguages(selected.map(({ value }) => value))
            .then(() => e.target.style.backgroundColor = null);
    }


    //main page
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

            <div className="flex gap-20">
                <MenuSettings userType={context.user.type} curPage={page} action={choosePage} />
                <div className="flex justify-around mt-5"></div>
                <PersonalInfo />
                <div className="smallbtn2">
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
            <div className="flex gap-20">
                <MenuSettings userType={context.user.type} curPage={page} action={choosePage} />
                <div className="flex justify-around mt-5">
                </div>
                <div >
                    <LanguageSelection />
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
            <div className="settings-reviews-container">
                <MenuSettings userType={context.user.type} action={choosePage} />
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
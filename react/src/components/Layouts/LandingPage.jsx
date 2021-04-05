import React from 'react';
import { LargeBtn } from '../Buttons/LargeBtn'
import { Footer } from '../Shared/Footer'

export const LandingPage = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-between border-b p-5">
                <div className="flex flex-row items-center">
                    <img src="assets/logo_icon.png" alt="logo" className="w-20 h-20"/>
                    <h1 className="text-2xl text-gray-800 font-bold italic ml-4">Blueberry Express</h1>
                </div>
                
                <LargeBtn label='Login'/>
            </div>

            <div className="flex flex-row items-center justify-around mt-16">
                <div >
                    <img src="assets/homepageLearn.png" alt="homepageLearn" className="h-96"/>
                </div>
                <div className="flex flex-col items-end border p-5 rounded-xl shadow-md -ml-56">
                    <h1 className="text-3xl font-bold">Discover a long love for language.</h1>
                    <div className="mt-7 mr-7">
                        <LargeBtn label='Sign-up'/>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-around mt-20">
                <h3 className="text-lg italic text-gray-600">Connecting those who love to learn and those who love to teach.</h3>
            </div>
            

            <div className="fixed w-full bottom-0">
                <Footer />
            </div>
            
            
        </div>
    )
}
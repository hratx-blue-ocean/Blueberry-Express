import React from 'react';
import { LargeBtn } from '../Buttons/LargeBtn'
import { Footer } from '../Shared/Footer'
import { Logo } from '../Shared/Logo'

export const LandingPage = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-between border-b p-4">
                <div className="flex flex-row items-center">
                    <Logo />
                    <h1 className="text-2xl text-gray-800 font-bold italic mt-3 ml-4">Blueberry Express</h1>
                </div>
                <div className="mr-5">
                    <LargeBtn label='Login' />

                </div>
            </div>

            <div className="flex items-center justify-center mt-16">
                <div className="mr-16">
                    <img src="assets/homepageLearn.png" alt="homepageLearn" className="h-96" />
                </div>
                <div className="flex flex-col items-end border p-5 rounded-xl shadow-md">
                    <h1 className="text-3xl font-bold">Discover a long love for language.</h1>
                    <div className="mt-7 mr-7">
                        <LargeBtn label='Sign-up' />
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
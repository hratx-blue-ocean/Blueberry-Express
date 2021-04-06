import React from 'react';
import { Logo } from '../Shared/Logo'
import { GoogleBtn } from '../Buttons/GoogleBtn'
import { Footer } from '../Shared/Footer'

export const Signup = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-between border-b p-5">
                <div className="flex flex-row items-center">
                    <Logo />
                    <h1 className="text-2xl text-gray-800 font-bold italic ml-4">Blueberry Express</h1>
                </div>
            </div>

            <div className="flex max-w-md mx-auto my-16 p-6 bg-white rounded-lg shadow-xl">
                <div className="ml-10 mt-6 mb-10 pt-3 flex flex-col justify-center items-center">
                    <h4 className="text-4xl text-gray-900 mb-6">Create an account</h4>
                    <GoogleBtn label="Signup with Google"/>
                    <p className="text-sm text-gray-400 italic mt-6">Create your account to fully experience the app</p>
                </div>
            </div>

            <div className="fixed w-full bottom-0">
                <Footer />
            </div>
        </div>
    )
}
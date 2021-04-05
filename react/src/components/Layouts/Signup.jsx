import React from 'react';
import { Logo } from '../Shared/Logo'
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

            <div className="flex flex-column justify-center items-center max-w-md mx-auto flex p-6 bg-white rounded-lg shadow-xl">
                <div className="m-6 pt-3">
                    <h4 className="text-4xl text-gray-900">Create an account</h4>
                    <p className="text-sm text-gray-400 italic mt-6">Create your account to fully experience the app</p>
                </div>
            </div>

            <div className="fixed w-full bottom-0">
                <Footer />
            </div>
        </div>
    )
}
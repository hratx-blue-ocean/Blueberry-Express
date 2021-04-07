import React from 'react';
import { Logo } from '../Shared/Logo'
import { GoogleBtn } from '../Buttons/GoogleBtn'
import { Footer } from '../Shared/Footer'
import { Link } from "react-router-dom";
import { login } from '../../auth';

export const Login = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-between border-b p-5">
              <Link to="/">
                <div className="flex flex-row items-center">
                    <Logo />
                    <h1 className="text-2xl text-gray-800 font-bold italic ml-4">Blueberry Express</h1>
                </div>
              </Link>
            </div>

            <div className="flex max-w-md mx-auto my-16 p-6 bg-white rounded-lg shadow-xl">
                <div className="m-6 pt-3 flex flex-col justify-center items-center">
                    <h4 className="text-4xl text-gray-900 mb-6">Login</h4>
                    <GoogleBtn label="Login with Google" handleClick={() => login()}/>
                    <p className="text-sm text-gray-400 italic mt-6">By signing in to Blueberry Express, you agree to our Terms and Privacy Policy.</p>
                </div>
            </div>

            <div className="fixed w-full bottom-0">
                <Footer />
            </div>
        </div>
    )
}
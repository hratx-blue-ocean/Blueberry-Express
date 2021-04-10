import React from 'react';
import { Logo } from '../Shared/Logo'
import { Footer } from '../Shared/Footer'
import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CloudCircleIcon from '@material-ui/icons/CloudCircle';

export const AboutUs = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-between border-b p-2">
              <Link to="/">
                <div className="flex flex-row items-center">
                    <Logo />
                    <h1 className="text-2xl text-gray-800 font-bold italic mt-3 ml-4">Blueberry Express</h1>
                </div>
              </Link>
            </div>

            <div className="lex flex-col my-16 p-6 bg-white rounded-lg shadow-xl">
                <h1 className="text-xl text-bold border-b mb-3">About the Project</h1>
                <p>Everyone learns in different ways. Our one goal is to connect people who love to teach to the people who love to learn.</p>
            </div>

            <div className="flex flex-col my-16 p-6 bg-white rounded-lg shadow-xl">
                <h1 className="text-xl text-bold border-b">Front End Team</h1>
                <div className="flex justify-center">
                    <div className="flex flex-col justify-items-center items-center border w-52 rounded-lg shadow-sm p-3 m-3 hover:shadow-xl cursor-pointer">
                        <img className="mb-3 border shadow-md rounded-full" src='assets/espeon.webp'/>
                        <h1 className="border-b mb-2">Matthew Collins</h1>
                        <div className="flex justify-center">
                            <a className="pr-2 pl-2 text-md" href="https://github.com/matt-collins087" target="_blank"><GitHubIcon /></a>
                            <a className="pr-2 pl-2 text-md" href="https://www.linkedin.com/in/matthew-collins-1086871b8/" target="_blank"><LinkedInIcon /></a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-items-center items-center border w-52 rounded-lg shadow-sm p-3 m-3 hover:shadow-xl cursor-pointer">
                        <img className="mb-3 border shadow-md rounded-full" src='assets/umbreon.webp'/>
                        <h1 className="border-b mb-2">Tahsin Ahmed</h1>
                        <div className="flex justify-center">
                            <a className="pr-2 pl-2 text-md" href="https://github.com/tahsinocity" target="_blank"><GitHubIcon /></a>
                            <a className="pr-2 pl-2 text-md" href="https://www.linkedin.com/in/tahsinahmed95/" target="_blank"><LinkedInIcon /></a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-items-center items-center border w-52 rounded-lg shadow-sm p-3 m-3 hover:shadow-xl cursor-pointer">
                        <img className="mb-3 border shadow-md rounded-full" src='assets/flareon.webp'/>
                        <h1 className="border-b mb-2">Brandon Harden</h1>
                        <div className="flex justify-center">
                            <a className="pr-2 pl-2 text-md" href="https://github.com/bmh0013" target="_blank"><GitHubIcon /></a>
                            <a className="pr-2 pl-2 text-md" href="https://www.linkedin.com/in/brandon-harden/" target="_blank"><LinkedInIcon /></a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-items-center items-center border w-52 rounded-lg shadow-sm p-3 m-3 hover:shadow-xl cursor-pointer">
                        <img className="mb-3 border shadow-md rounded-full" src='assets/vaporeon.webp'/>
                        <h1 className="border-b mb-2">Zach Thomas</h1>
                        <div className="flex justify-center">
                            <a className="pr-2 pl-2 text-md" href="https://github.com/zt2401" target="_blank"><GitHubIcon /></a>
                            <a className="pr-2 pl-2 text-md" href="https://www.linkedin.com/in/zachthomas2401/" target="_blank"><LinkedInIcon /></a>
                        </div>
                    </div>
                </div>  
            </div>

            <div className="flex flex-col my-16 p-6 bg-white rounded-lg shadow-xl">
                <h1 className="text-xl text-bold border-b">Back End Team</h1>

                <div className="flex justify-center">
                    <div className="flex flex-col justify-items-center items-center border w-52 rounded-lg shadow-sm p-3 m-3 hover:shadow-xl cursor-pointer">
                        <img className="mb-3 border shadow-md rounded-full" src='assets/jolteon.webp'/>
                        <h1 className="border-b mb-2">Cody Haines</h1>
                        <div className="flex justify-center">
                            <a className="pr-2 pl-2 text-md" href="https://github.com/chaines" target="_blank"><GitHubIcon /></a>
                            <a className="pr-2 pl-2 text-md" href="https://www.linkedin.com/in/chaines51/" target="_blank"><LinkedInIcon /></a>
                        </div>
                    </div>
                    <div className="flex flex-col justify-items-center items-center border w-52 rounded-lg shadow-sm p-3 m-3 hover:shadow-xl cursor-pointer">
                        <img className="mb-3 border shadow-md rounded-full" src='assets/glaceon.webp'/>
                        <h1 className="border-b mb-2">Ekaterina Drozdova</h1>
                        <div className="flex justify-center">
                            <a className="pr-2 pl-2 text-md" href="https://github.com/Katerina-spb" target="_blank"><GitHubIcon /></a>
                            <a className="pr-2 pl-2 text-md" href="https://www.linkedin.com/in/ekaterina-drozdova/" target="_blank"><LinkedInIcon /></a>        
                        </div>
                    </div>
                    <div className="flex flex-col justify-items-center items-center border w-52 rounded-lg shadow-sm p-3 m-3 hover:shadow-xl cursor-pointer">
                        <img className="mb-3 border shadow-md rounded-full" src='assets/leafeon.webp'/>
                        <h1 className="border-b mb-2">Steve Gackstetter</h1>
                        <div className="flex justify-center">
                            <a className="pr-2 pl-2 text-md" href="https://github.com/stevehackreactor" target="_blank"><GitHubIcon /></a>
                            <a className="pr-2 pl-2 text-md" href="https://www.linkedin.com/in/steve-gackstetter/" target="_blank"><LinkedInIcon /></a>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-items-center items-center my-16 p-6 bg-white rounded-lg shadow-xl">
                <h1 className="border-b mb-2">Click here to see the repo!</h1>
                <a href="https://github.com/hratx-blue-ocean/Blueberry-Express" target="_blank"><CloudCircleIcon /></a>
            </div>
            <div className="fixed w-full bottom-0">
                <Footer />
            </div>
        </div>
    )
}
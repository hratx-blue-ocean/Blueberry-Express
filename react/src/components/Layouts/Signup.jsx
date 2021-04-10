import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { GoogleBtn } from '../Buttons/GoogleBtn'
import { Logo } from '../Shared/Logo'
import { Footer } from '../Shared/Footer'
import { LanguageForm } from '../Forms/LanguageForm';
import { UserTypeForm } from '../Forms/UserTypeForm';
import { initializeUser, setUserLanguages, getUser } from '../../api.js';
import { TransparentLogo } from '../Shared/TransparentLogo.jsx';
import { AuthContext, login } from '../../auth';

export const Signup = () => {
  const context = useContext(AuthContext);
  const history = useHistory();
  const [userType, updateUserType] = useState('Teacher');

  useEffect(() => {
    if (context.user.type && context.user.languages.length){
      window.location = `/${context.user.type}home`;
    }
  })

  function setUserType(e) {
    updateUserType(e.target.innerHTML);

    e.target.style.backgroundColor = 'green';
    if (e.target.innerHTML === 'Teacher') {
      document.getElementById('student').style.backgroundColor = null;
    } else {
      document.getElementById('teacher').style.backgroundColor = null;
    }
  }

  async function confirmUser() {
    await initializeUser(userType.toLowerCase());
    await context.setUser({...context.user, type: userType.toLowerCase()})
  }

  async function updateUserLanguages(e) {
    var checked = [...document.querySelectorAll('input[type=checkbox]:checked')];
    await setUserLanguages(checked.map(item => item.value));
    await getUser().then(data => {
      context.setUser(data)
    });
  }

  const Main = (
    <div className="flex max-w-md mx-auto my-16 p-6 bg-white rounded-lg shadow-xl">
        <div className="ml-10 mt-6 mb-10 pt-3 flex flex-col justify-center items-center">
            <h4 className="text-4xl text-gray-900 mb-6">Create an account</h4>
            <GoogleBtn label="Signup with Google" handleClick={() => login()}/>
            <p className="text-sm text-gray-400 italic mt-6">Create your account to fully experience the app</p>
        </div>
    </div>
  );

  const TypeSelection = (
      <div className="flex justify-center flex-col">
        <UserTypeForm userType={userType} setType={setUserType} action={confirmUser}/>
      </div>
  );

  return (
    <div>
      <Link to="/">
        <div className="flex flex-row items-center justify-between border-b p-4">
          <div className="flex flex-row items-center">
            <Logo />
            <h1 className="text-2xl text-gray-800 font-bold italic mt-3 -ml-8">Blueberry Express</h1>
          </div>
        </div>
      </Link>
      { !context.loggedIn && Main }
      { (context.loggedIn && !context.user.type) && TypeSelection }
      { (context.loggedIn && context.user.type ) && ( <LanguageForm userType={userType} action={updateUserLanguages} /> ) }
      <div className="fixed w-full bottom-0">
          <Footer />
      </div>
    </div>
  )
}
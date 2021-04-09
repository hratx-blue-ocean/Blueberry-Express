import React, { useContext, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { GoogleBtn } from '../Buttons/GoogleBtn'
import { Logo } from '../Shared/Logo'
import { Footer } from '../Shared/Footer'
import { LanguageForm } from '../Forms/LanguageForm';
import { UserTypeForm } from '../Forms/UserTypeForm';
import { TypeConfirmation } from '../Modals/TypeConfirmation';
import { initializeUser, addUserLanguage } from '../../api.js';
import { AuthContext } from '../../auth';

export const Signup = ({ setUser }) => {
  const context = useContext(AuthContext);
  const history = useHistory();

  const [userType, updateUserType] = useState(null);
  const [proceed, updateProceed] = useState(false);

  function setUserType(e) {
    updateUserType(e.target.innerHTML.toLowerCase());

    e.target.style.backgroundColor = 'green';
    if (e.target.innerHTML === 'Teacher') {
      document.getElementById('student').style.backgroundColor = null;
    } else {
      document.getElementById('teacher').style.backgroundColor = null;
    }
  }

  function confirmUser() {
    initializeUser(userType);
    updateProceed(true);
  }

  function storeUserLanguages(e) {
    var checked = document.querySelectorAll('input[type=checkbox]:checked');
    checked.forEach(check => {
      addUserLanguage(check.value)
    })

    console.log('user type:', userType, context.user.type);
    if (userType === 'teacher' || context.user.type === 'teacher') {
      history.push('/teacherhome')
    } else {
      history.push('/studenthome')
    }
  }

  const Main = (
      <div>
        <div className="flex flex-row items-center justify-between border-b p-4">
          <Link to="/">
            <div className="flex flex-row items-center">
              <Logo />
              <h1 className="text-2xl text-gray-800 font-bold italic mt-3 ml-4">Blueberry Express</h1>
            </div>
          </Link>
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
  );

  const UserType = (
      <div>
        <UserTypeForm setType={setUserType} action={confirmUser}/>
      </div>
  );

  return (
    <div>
      { !context.loggedIn && Main }
      { (context.loggedIn && !context.user.type) && UserType }
      { (context.loggedIn && !context.user.type) && <TypeConfirmation type={userType} action={confirmUser} /> }
      { (context.loggedIn && ( context.user.type || proceed )) && (
        <LanguageForm userType={userType} action={storeUserLanguages} /> )
      }
    </div>
  )
}
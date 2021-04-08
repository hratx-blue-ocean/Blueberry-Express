import React, { useEffect, useState } from 'react';
import { LandingPage } from './Layouts/LandingPage.jsx';
import { Login } from './Layouts/Login.jsx';
import { Signup } from './Layouts/Signup.jsx';
import { StudentHome } from './Layouts/StudentHome.jsx';
import { TeacherHome } from './Layouts/TeacherHome.jsx';
import { UserProfile } from './Layouts/UserProfile.jsx';
import { CalendarView } from './Layouts/CalendarView.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './AppStyles.css';
import { getUser } from '../api';
import { AuthContext } from '../auth';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState('teacher');
  const [userName, setUserName] = useState('');
  const contextValue = {
    loggedIn,
    userType,
    userName,
  };

  useEffect(() => {
    getUser().then((data) => {
      if (data.id) {
        setLoggedIn(true);
        setUserType(data.type);
        setUserName(data.name);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/studenthome" exact component={StudentHome} />
            <Route path="/teacherhome" exact component={TeacherHome} />
            <Route path="/userprofile" render={() => <UserProfile userType={userType}/>} />
            <Route path="/userprofilelang" render={() => <UserProfileLang userType={userType}/>} />
            <Route path="/userprofilereviews" render={() => <UserProfileReviews userType={userType}/>} />
            <Route path="/calendar" exact component={CalendarView} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

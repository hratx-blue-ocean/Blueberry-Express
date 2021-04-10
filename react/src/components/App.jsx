import React, { useEffect, useState } from 'react';
import { LandingPage } from './Layouts/LandingPage.jsx';
import { Login } from './Layouts/Login.jsx';
import { Signup } from './Layouts/Signup.jsx';
import { StudentHome } from './Layouts/StudentHome.jsx';
import { TeacherHome } from './Layouts/TeacherHome.jsx';
import { UserProfile } from './Layouts/UserProfile.jsx';
import { CalendarView } from './Layouts/CalendarView.jsx';
import { AboutUs } from './Layouts/AboutUs.jsx';
import { Switch, Route, useHistory } from 'react-router-dom';
import './AppStyles.css';
import { getUser } from '../api';
import { AuthContext, openPaths } from '../auth';

const App = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  /**
   * Current properties of user:
   * id,
   * type,
   * name,
   * email,
   * bio,
   * languages
   */
  const contextValue = {
    loggedIn,
    user,
    setUser,
  };

  useEffect(() => {
    /**
     * The idea here is we're going to check if a user is logged in by trying to retrieve the info
     * for the current user. If that is successful, it will set the location to the appropriate
     * location. So, if they haven't completed the signup process, it will always redirect to the
     * /signup page. If they're logged in and at the landing page, it will automatically redirect
     * to the appropriate home portal. If they're not logged in, and trying to visit any route that
     * isn't whitelisted in auth.js, they will get redirected to the landing page.
     */
    getUser()
      .then((data) => {
        setLoggedIn(true);
        setUser(data);
        if (!data.type || !data.languages.length) {
          history.push('/signup');
        } else if (
          data.type === 'student' &&
          (history.location.pathname === '/' || history.location.pathname === '/teacherhome')
        ) {
          history.push('/studenthome');
        } else if (
          data.type === 'teacher' &&
          (history.location.pathname === '/' || history.location.pathname === '/studenthome')
        ) {
          history.push('/teacherhome');
        }
      })
      .catch((e) => {
        if (e.response.status === 403) {
          // User is not logged in
          // Clear the JWT just to be certain nothing weird happens
          localStorage.removeItem('jwt');
          if (!openPaths.includes(history.location.pathname)) history.push('/');
        } else if (e.response.status === 401) {
          localStorage.removeItem('jwt');
          window.location.reload();
        }
      });
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>
      <div>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/studenthome" exact component={StudentHome} />
          <Route path="/teacherhome" exact component={TeacherHome} />
          <Route path="/userprofile" exact component={UserProfile} />
          <Route path="/calendar" exact component={CalendarView} />
          <Route path="/aboutus" exact component={AboutUs} />
        </Switch>
      </div>
    </AuthContext.Provider>
  );
};

export default App;

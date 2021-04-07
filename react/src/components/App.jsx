import React from 'react';
import { LandingPage } from './Layouts/LandingPage.jsx';
import { Login } from './Layouts/Login.jsx';
import { Signup } from './Layouts/Signup.jsx';
import { StudentHome } from './Layouts/StudentHome.jsx';
import { TeacherHome } from './Layouts/TeacherHome.jsx';
import { UserProfile } from './Layouts/UserProfile.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './appstyles.css'

import { ReviewsContainer } from './UserProfile/ReviewsContainer.jsx';


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/studenthome" exact component={StudentHome} />
        <Route path="/teacherhome" exact component={TeacherHome} />
        <Route path="/userprofile" exact component={UserProfile} />

        <Route path="/review" exact component={ReviewsContainer} />
      </Switch>
    </div>
  </Router>
);

export default App;

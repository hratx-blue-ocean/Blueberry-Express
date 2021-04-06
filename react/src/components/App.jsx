import React from 'react';
import { LandingPage } from './Layouts/LandingPage.jsx';
import { Login } from './Layouts/Login.jsx';
import { Signup } from './Layouts/Signup.jsx';
import { UserProfile } from './Layouts/UserProfile.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={UserProfile} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </div>
  </Router>
);

export default App;

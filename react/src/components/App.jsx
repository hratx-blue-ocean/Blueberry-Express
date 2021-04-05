import React from 'react';
import { LandingPage } from './Layouts/LandingPage.jsx';
import { Switch, Route } from "react-router-dom";

import {StudentHome} from './Layouts/StudentHome.jsx'

const App = () => (
  <div>
    {/* <Switch>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch> */}
    <StudentHome/>
  </div>
);

export default App;

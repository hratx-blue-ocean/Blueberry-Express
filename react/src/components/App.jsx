import React from 'react';
import { LandingPage } from './Layouts/LandingPage.jsx';
import { Switch, Route } from "react-router-dom";

const App = () => (
  <div>
    <Switch>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  </div>
);

export default App;

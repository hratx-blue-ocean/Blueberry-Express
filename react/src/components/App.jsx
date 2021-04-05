import React from 'react';
import {TeacherContainer} from './StudentOnly/TeacherContainer'

const App = () => (
  <div>
    <h1 className="text-3xl font-extrabold">Hello, Front-End!</h1>
    process.env.EXAMPLE_VARIABLE: {process.env.EXAMPLE_VARIABLE}
    <TeacherContainer/>
  </div>
);

export default App;

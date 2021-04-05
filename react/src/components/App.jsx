import React from 'react';
import ContinueBtn from './Buttons/ContinueBtn'

const App = () => (
  <div>
    <h1 className="text-3xl font-extrabold">Hello, Front-End!</h1>
    process.env.EXAMPLE_VARIABLE: {process.env.EXAMPLE_VARIABLE}
    <ContinueBtn/>
  </div>
);

export default App;

import React from 'react';

import Footer from './Shared/Footer.jsx';

const App = () => (
  <div>
    <h1 className="text-3xl font-extrabold">Hello, Front-End!</h1>
    process.env.EXAMPLE_VARIABLE: {process.env.EXAMPLE_VARIABLE}
    <Footer />
  </div>
);

export default App;

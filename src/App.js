import React from 'react';
import SiteRouter from './content/SiteRouter'
import {BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <SiteRouter />
    </Router>
  );
}

export default App;

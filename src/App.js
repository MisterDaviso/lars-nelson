import React from 'react';
import NavBar from './content/NavBar'
import Content from './content/Content'
import {BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <Content />
    </Router>
  );
}

export default App;

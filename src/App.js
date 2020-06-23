import React from 'react';
import Blog from './content/Blog/Blog'
import {BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Blog />
    </Router>
  );
}

export default App;

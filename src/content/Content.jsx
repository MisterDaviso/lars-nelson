import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Resume from './pages/Resume'

const Content = props => {
    return (
        <div class="container">
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
        </div>
    )
}

export default Content
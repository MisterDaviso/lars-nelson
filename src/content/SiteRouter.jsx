import React from 'react';
import { Route } from 'react-router-dom'
import Blog from './Blog'
import Resume from './Resume'

const SiteRouter = props => {
    return (
        <div>
            <Route exact path="/" component={Blog} />
            <Route path="/resume" component={Resume} />
        </div>
    )
}

export default SiteRouter
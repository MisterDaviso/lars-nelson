import React from 'react';
import { Route } from 'react-router-dom'
import Blog from '../Blog'

const SiteRouter = props => {
    return (
        <div>
            <Route exact path="/" component={Blog} />
            <Route path="/lars-nelson" component={Blog} />
        </div>
    )
}

export default SiteRouter
import { Route } from 'react-router-dom';
import React from 'react';
import ArticleList from './components/containers/ArticleList';
import ArticleDetail from './components/containers/ArticleDetail';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/:articleID' component={ArticleDetail} />
    </div>

)

export default BaseRouter;
/* @flow */

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';

const routes = (
    <Route path='/' component={Layout}>
        <IndexRoute component={MainPage} />
    </Route>
);

export default routes;

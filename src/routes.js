import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header';
import Home from './components/home';
import Artist from './components/artist'

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/artist/:artistId" component={Artist} />
            <Route path="/" component={Home} />
        </Switch>


    </BrowserRouter>
);

export default Routes;
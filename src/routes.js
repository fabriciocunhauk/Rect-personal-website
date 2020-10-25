import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const Routes = () => (
    <Switch>
        <Route exact path="/Rect-personal-website" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
    </Switch>
)

export default Routes;
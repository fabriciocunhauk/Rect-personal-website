import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPageBanner from './pages/LandinPageBanner/index';
import AboutMe from './pages/AboutMe/index';
import Contact from './pages/Contact/index';
import Projects from './pages/Projects/index';

const Routes = () => (
    <Switch>
        <Route exact path="/Rect-personal-website" component={LandingPageBanner} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
    </Switch>
)

export default Routes;
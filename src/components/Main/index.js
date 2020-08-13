import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/index';
import AboutMe from '../AboutMe/index';
import Contact from '../Contact/index';
import Projects from '../Projects/index';
import Resume from '../Resume/index';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
    </Switch>
)

export default Main;
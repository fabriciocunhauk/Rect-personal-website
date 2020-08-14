import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage/index';
import AboutMe from '../../pages/AboutMe/index';
import Contact from '../../pages/Contact/index';
import Projects from '../../pages/Projects/index';
import Resume from '../../pages/Resume/index';

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
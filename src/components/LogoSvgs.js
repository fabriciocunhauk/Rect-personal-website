import React from 'react';

import javascriptSvg from '../assets/images/SVG/javascript-4.svg';
import htmlSvg from '../assets/images/SVG/html5.svg';
import csstSvg from '../assets/images/SVG/css3.svg';
import reactSvg from '../assets/images/SVG/react-1.svg';
import nodeSvg from '../assets/images/SVG/node-js-logo.svg';
import mongoDbSvg from '../assets/images/SVG/mongodb.svg';
import gitHubSvg from '../assets/images/SVG/github-octocat.svg';
import gitSvg from '../assets/images/SVG/git.svg';
import mySqlSvg from '../assets/images/SVG/mysql.svg';
import postgresSvg from '../assets/images/SVG/postgresql.svg';

import '../assets/styles/components/logo-svgs.css'

function LogoSvgs() {
    return (
        <div className="home__content">
            <img className="logo" src={javascriptSvg} alt="javascript" />
            <img className="logo" src={htmlSvg} alt="html" />
            <img className="logo" src={csstSvg} alt="css" />
            <img className="logo" src={reactSvg} alt="react" />
            <img className="logo" src={nodeSvg} alt="node" />
            <img className="logo" src={mongoDbSvg} alt="mongoDb" />
            <img className="logo" src={gitHubSvg} alt="github" />
            <img className="logo" src={gitSvg} alt="git" />
            <img className="logo" src={mySqlSvg} alt="mysql" />
            <img className="logo" src={postgresSvg} alt="postgtres" />
        </div>
    )
}

export default LogoSvgs;
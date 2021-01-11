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
            <a href="https://www.javascript.com/" rel="noopener noreferrer" target="_blank"><img className="logo" src={javascriptSvg} alt="javascript" /></a>
            <a href="https://www.w3schools.com/html/" rel="noopener noreferrer" target="_blank"><img className="logo" src={htmlSvg} alt="html" /></a>
            <a href="https://www.w3schools.com/css/default.asp" rel="noopener noreferrer" target="_blank"><img className="logo" src={csstSvg} alt="css" /></a>
            <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank"><img className="logo" src={reactSvg} alt="react" /></a>
            <a href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank"><img className="logo" src={nodeSvg} alt="node" /></a>
            <a href="https://www.mongodb.com/cloud/atlas" rel="noopener noreferrer" target="_blank"><img className="logo" src={mongoDbSvg} alt="mongoDb" /></a>
            <a href="https://github.com/" rel="noopener noreferrer" target="_blank"><img className="logo" src={gitHubSvg} alt="github" /></a>
            <a href="https://git-scm.com/" rel="noopener noreferrer" target="_blank"><img className="logo" src={gitSvg} alt="git" /></a>
            <a href="https://www.mysql.com/" rel="noopener noreferrer" target="_blank"><img className="logo" src={mySqlSvg} alt="mysql" /></a>
            <a href="https://www.postgresql.org/" rel="noopener noreferrer" target="_blank"><img className="logo" src={postgresSvg} alt="postgtres" /></a>
        </div>
    )
}

export default LogoSvgs;
import React from 'react';
import { Card, CardTitle, CardActions, CardText, Button } from 'react-mdl';
import { FaGithub, FaChrome } from 'react-icons/fa';

import myUrls from '../myUrls';
import BgWraperContainer from '../components/BgWraperContainer';
import NavBar from '../components/NavBar';

import '../assets/styles/pages/projects.css';

function createCard(myUrls) {
    return (
        <div className="card-container">
            <Card key={myUrls.id} shadow={0} id="card-style">
                <CardTitle expand style={{ color: '#fff', background: `url(${myUrls.imgURL}) center / contain`, backgroundRepeat: "no-repeat" }}></CardTitle>
                <CardText style={{ fontWeight: "bold" }}>
                    {myUrls.name}
                </CardText>
                <CardActions border>
                    <Button colored href={myUrls.link} target="_blank"><FaChrome size={30} color="black" /></Button>
                    <Button colored href={myUrls.github} target="_blank"><FaGithub size={30} color="black" /></Button>
                </CardActions>
            </Card>
        </div>
    )
}

function Projects() {
    return (
        <NavBar>
            <div className="main-container">
                <BgWraperContainer>
                    <div className="card">
                        {myUrls.map(createCard)}
                    </div>
                </BgWraperContainer>
            </div>
        </NavBar>
    )
}

export default Projects;
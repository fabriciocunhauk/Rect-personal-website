import React from 'react';
import { Card, CardTitle, CardActions, CardText, Button } from 'react-mdl';
import myUrls from '../myUrls';
import '../assets/styles/pages/projects.css';
import BgWraperContainer from '../components/BgWraperContainer';
import NavBar from '../components/NavBar';

function createCard(myUrls) {
    return (
        <div className="card-container">
            <Card shadow={0} id="card-style">
                <CardTitle expand style={{ color: '#fff', background: `url(${myUrls.imgURL}) center / contain`, backgroundRepeat: "no-repeat" }}></CardTitle>
                <CardText>
                    {myUrls.name}
                </CardText>
                <CardActions border>
                    <Button colored href={myUrls.link} target="_blank">Website</Button>
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
import React from 'react';
import Card from '../../components/Card/index';
import myUrls from '../../myUrls'
import './styles.css';

function createCard(myUrls) {
    return (
        <Card
            imgURL={myUrls.imgURL}
            name={myUrls.name}
            link={myUrls.link}
        />
    )
}

function Projects() {
    return (
        <div className="cards-display">
            {myUrls.map(createCard)}
        </div>
    )
}

export default Projects;
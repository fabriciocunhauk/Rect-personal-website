import React from 'react';
import { Card, CardTitle, CardActions, CardText, Button } from 'react-mdl';

import './styles.css';

function Cards({ imgURL, link, name }) {
    return (
        <>
            <Card shadow={0} id="card-style">
                <CardTitle expand style={{ color: '#fff', background: `url(${imgURL}) center / contain`, backgroundRepeat: "no-repeat" }}></CardTitle>
                <CardText>
                    {name}
                </CardText>
                <CardActions border>
                    <Button colored href={link} target="_blank">Website</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Cards;


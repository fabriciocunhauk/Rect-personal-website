import React from 'react';
import { Card, CardTitle, CardActions, CardText, Button } from 'react-mdl';

function Cards({ imgURL, link, name }) {
    return (
        <>
            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto', marginTop: "20px" }}>
                <CardTitle expand style={{ color: '#fff', background: `url(${imgURL}) center / cover` }}></CardTitle>
                <CardText>
                    {name}
                </CardText>
                <CardActions border>
                    <Button colored href={link} target="_blank">GitHub</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Cards;


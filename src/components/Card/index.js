import React from 'react';
import { Card, CardTitle, CardActions, CardText, Button } from 'react-mdl';

function Cards(props) {
    return (
        <>
            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto', marginTop: "20px" }}>
                <CardTitle expand style={{ color: '#fff', background: `url(${props.imgURL}) center / cover` }}></CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Button colored href={props.link}>View Updates</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Cards;


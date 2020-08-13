import React from 'react';
import { Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

function Cards(props) {
    return (
        <div>
            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', background: `url(${props.imgURL}) center / cover` }}></CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
    </CardText>
                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Cards;


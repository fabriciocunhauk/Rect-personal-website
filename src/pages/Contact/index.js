import React from 'react';
import { Grid, Cell } from 'react-mdl';


function Contact() {
    return (
        <div>
            <Grid>
                <Cell col={6}>
                    <h1>Half</h1>
                </Cell>
                <Cell col={6}>
                    <h1>Half</h1>
                </Cell>
            </Grid>
        </div>
    )
}

export default Contact;
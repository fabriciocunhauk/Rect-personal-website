import React from 'react';
import '../App.css'
import { Grid, Cell } from 'react-mdl';


function LandingPage() {
    return (
        <div>

            <img src="" alt="" />

            <div className="banner-text">
                <h1>Im a Full stack Developer</h1>

                <hr />

                <p>HTML/CSS | Bootstrap | JavaScript | Node.js | React | Express | MongoDb/Mongoose </p>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/fabricio-cunha-7b7392162/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin" arial-hidden="true" />
                    </a>
                    <a href="https://github.com/fabriciocunhauk" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github" arial-hidden="true" />
                    </a>
                    <a href="https://www.facebook.com/fabricio.cunha.54?ref=bookmarks" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-facebook" arial-hidden="true" />
                    </a>
                    <a href="https://www.instagram.com/fabriciocunhauk/?hl=pt" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-instagram" arial-hidden="true" />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default LandingPage;
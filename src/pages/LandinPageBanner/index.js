import React from 'react';
import '../../App'

import './styles.css'

function LandingPageBanner() {
    return (
        <div className="landing-page">

            <img className="profile-pic" src="https://avatars3.githubusercontent.com/u/60474481?s=460&u=438df96f772629d3bf126962a557801874f0f9a8&v=4" alt="my-image" />



            <div className="banner-box">
                <h1>Im a Full stack Developer</h1>

                <hr />

                <p>HTML5 | CSS3 | JavaScript | Node.js | React.Js | React Native | Bootstrap | APIs | REST APIs | Express | SQL | NoSQL | MongoDb/Mongoose </p>

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

export default LandingPageBanner;
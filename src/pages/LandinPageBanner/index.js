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
            </div>
        </div>

    )
}

export default LandingPageBanner;
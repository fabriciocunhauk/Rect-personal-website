import React from 'react';
import NavBar from '../components/NavBar'
import '../App'

import '../assets/styles/pages/home.css';
import BgWraperContainer from '../components/BgWraperContainer';
import LogoSvgs from '../components/LogoSvgs';

function Home() {
    return (
        <NavBar>
            <div className="home-container">
                <BgWraperContainer>
                    <div className="home__content">

                        <img src="https://avatars3.githubusercontent.com/u/60474481?s=460&u=438df96f772629d3bf126962a557801874f0f9a8&v=4" alt="my-background" />

                        <div className="banner-box">
                            <h1>I'm a Front-End Developer</h1>

                            <hr />

                            <p>JavaScript | HTML | CSS | SaSS | Styled-components | Node.js | React.Js | Redux | Git | APIs | REST APIs | Express | SQL | NoSQL | MongoDb/Mongoose </p>
                        </div>
                    </div>
                    <LogoSvgs />
                </BgWraperContainer>
            </div>
        </NavBar>
    );
}

export default Home;
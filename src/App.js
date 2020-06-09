import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div style={{ height: '700px', position: 'relative' }}>
            <Layout style={{ background: 'url(https://images.techhive.com/images/article/2017/02/16258492451_3a097a932a_k-100707389-large.jpg) center / cover' }}>
                <Header transparent title="Title" style={{ color: 'white' }}>
                    <Navigation>
                        <Link to="landingpage">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About me</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/landingpage">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About me</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main />
                </Content>
            </Layout>
        </div>
    )
}

export default App;
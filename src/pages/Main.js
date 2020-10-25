import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Routes from '../routes';
import { Link } from 'react-router-dom';

import '../assets/styles/pages/main.css';

function MainLayout() {
    return (
        <div >
            <Layout className="main-layout">
                <Header className="header-color" title={<span><strong>Fabricio Cunha</strong></span>}>
                    <Navigation>
                        <Link to="/Rect-personal-website">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/Rect-personal-website">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Routes />
                </Content>
            </Layout>
        </div>
    )
}

export default MainLayout;
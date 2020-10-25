import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

import '../assets/styles/components/nav-bar.css';

function NavBar({ children }) {
    return (
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
                {children}
            </Content>
        </Layout>
    )
}

export default NavBar;
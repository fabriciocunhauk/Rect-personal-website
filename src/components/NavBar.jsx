import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

import '../assets/styles/components/nav-bar.css';

function NavBar({ children }) {
    return (
        <Layout>
            <Header className="header-color" title={<Link to="/Rect-personal-website" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>Fabricio Cunha</Link>}>
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
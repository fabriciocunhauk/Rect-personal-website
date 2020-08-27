import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Routes from '../../routes';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div >
            <Layout style={{ background: 'url(https://images.techhive.com/images/article/2017/02/16258492451_3a097a932a_k-100707389-large.jpg) center / cover' }}>
                <Header className="header-color" title={<span><strong>My Portifolio</strong></span>}>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About me</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About me</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Routes />
                </Content>
            </Layout>
        </div>
    )
}

export default NavBar;
import React from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';

import '../assets/styles/pages/contact.css'
import BgWraperContainer from '../components/BgWraperContainer';
import NavBar from '../components/NavBar';

function Contact() {
    return (
        <NavBar>
            <div className="contact-info">
                <BgWraperContainer>
                    <div className="content-info">
                        <h1>Contact Me</h1>

                        <hr />

                        <div className="list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ color: "white", paddingBottom: "20px" }} avatar="person">Fabricio Cunha</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ color: "white", paddingBottom: "20px" }} icon="phone">+447453155169</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <a href="mailto: fabriciocunhadeveloper@gmail.com" style={{ textDecoration: "none" }}>
                                        <ListItemContent style={{ color: "white", paddingBottom: "20px" }} icon="email">fabriciocunhadeveloper@gmail.com</ListItemContent>
                                    </a>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ color: "white", paddingBottom: "20px" }} icon="place">London</ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/fabricio-cunha-7b7392162/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin icon-increase" arial-hidden="true" />
                            </a>
                            <a href="https://github.com/fabriciocunhauk" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github icon-increase" arial-hidden="true" />
                            </a>
                            <a href="https://www.facebook.com/fabricio.cunha.54?ref=bookmarks" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook icon-increase" arial-hidden="true" />
                            </a>
                            <a href="https://www.instagram.com/fabriciocunhauk/?hl=pt" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram icon-increase" arial-hidden="true" />
                            </a>
                        </div>
                    </div>

                </BgWraperContainer>
            </div>
        </NavBar>

    )
}

export default Contact;
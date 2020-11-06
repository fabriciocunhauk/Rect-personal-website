import React from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';

import BgWraperContainer from '../components/BgWraperContainer';
import NavBar from '../components/NavBar';
import myCv from "../assets/Download-file/Resume_01_Fabricio_Cunha.docx";

import '../assets/styles/pages/contact.css'

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
                                    <ListItemContent style={{ paddingBottom: "20px" }} icon="phone">
                                        <a href="tel:+447453155169" style={{ textDecoration: "none", color: "white" }}>+447453155169</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <a href="mailto: fabriciocunhadeveloper@gmail.com" style={{ textDecoration: "none" }}>
                                        <ListItemContent style={{ color: "white", paddingBottom: "20px" }} icon="email">
                                            fabriciocunhadeveloper@gmail.com
                                        </ListItemContent>
                                    </a>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ color: "white", paddingBottom: "20px" }} icon="place">London</ListItemContent>
                                </ListItem>
                                <a href={myCv} className="cv-button" target="_blank" rel="noopener noreferrer" download="Fabricio-Cunha-CV.docx">Download CV</a>
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
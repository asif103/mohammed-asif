import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {  faPhoneAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer d-flex flex-column align-items-center justify-content-center ">
            <div>
            <h1 className="text-center">Mohammed Asif</h1>
            <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> <a href="tel:+8801631048588">+8801631048588</a></p>
            <p><FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon> <a href="mailto:asif.cse473@gmail.com">asif.cse473@gmail.com</a></p>
            </div>
            <p className="text-center"><a href="" className="facebook"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a> <a href="" className="LinkedIn"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a> </p>
            </div>
            <p className="text-center">All rights reserved @ Mohammed Asif</p>
        </div>
    );
};

export default Footer;
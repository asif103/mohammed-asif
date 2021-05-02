import { faArrowDown, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';
import TypeWriter from 'react-typewriter';
import CV from '../../../images/Mohammed_Asif_CV.pdf'



const Header = () => {
    return (
        <div className="header d-flex align-items-center justify-content-center ">
            <div>
            <TypeWriter typing={1}><h1 className="text-center">Mohammed Asif</h1></TypeWriter>
                <TypeWriter typing={1}><p className="text-center">A Passionate MERN Stack Developer</p></TypeWriter>
                <p className="text-center line-1 anim-typewriter">A successful project manager and content creator</p>
                <p className="text-center downArrow"><a href="#about">
                    <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                </a></p>
                <p className="text-center">
                    <a href={ CV} className="btn btn-success"><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon> Download my Resume</a>
                </p>
            </div>
        </div>
    );
};

export default Header;
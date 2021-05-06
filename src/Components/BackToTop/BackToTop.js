import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './BackToTop.css'

const BackToTop = () => {
    return (
        <div className="btt text-center">
            <a href="#"><FontAwesomeIcon icon={ faArrowUp}></FontAwesomeIcon></a>
        </div>
    );
};

export default BackToTop;
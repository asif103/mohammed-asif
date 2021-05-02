import { faAngleDown, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Work = ({ portfolio}) => {
    return (
    <div className="card">
	<div className="blur">
		<div className="color"></div>
	</div>
	<div className="profile">
		<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/225748/profile.jpg" alt="User" />
        <h1>{ portfolio.name}</h1>
		<p>Front-end Web Developer</p>
		<div className="info">
            <FontAwesomeIcon icon={ faInfo}></FontAwesomeIcon>
            <FontAwesomeIcon icon={ faAngleDown}></FontAwesomeIcon>
			<p>In short, I spend my earthly time striving to create some darned awesome UI designs, and also develop a few.</p>
			
		</div>
	</div>
</div>
    );
};

export default Work;
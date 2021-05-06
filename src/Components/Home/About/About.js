import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProfileImage from '../../../images/me.png';

const About = () => {
   
    return (
        <Container className="about" id="about">
            <div className="head-section box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                <h1 className="text-center">About Me</h1>
            </div>
            <Row>
                <Col md={6} sm={ 12}>
                    <img src={ ProfileImage} alt="" class="img-fluid"/>
                </Col>
                <Col md={6} sm={ 12}>
                    <p className="p-5">Hello There!! <br /> I am, <h4> Mohammed Asif.</h4> I am very passionate web developer. In my web development journey I have learnt few technologies and applied several as well.
                    <p>I have expertise on:</p>
                    <h6>React.js, React Bootstrap, Firebase Auth, Firebase Hosting, Heroku, PHP, MySQL, Laravel, HTML, 
CSS, Responsive CSS, Bootstrap. </h6>
                    <p>I am also comfortable with:</p>
                    <h6>Node.js, Express.js, Milligram CSS, MongoDB.</h6>
                    <p>I am familiar with:</p>
                    <h6>Redux, Next.js, React Native, Laravel Backpack</h6>
                    <p>I know the use of:</p>
                    <h6>cPanel, Project Management, Git (GitHub, Bitbucket, GitLab), Postman, Visual 
Studio Code, PHP Storm, Sublime Text, photoshop, illustrator. </h6>
                    </p>
                    
                    
                </Col>
            </Row>
        </Container>
    );
};

export default About;
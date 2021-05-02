import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProfileImage from '../../../images/me.png'

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
                <Col>
                    <img src={ ProfileImage} alt="" class="img-fluid"/>
                </Col>
                <Col>
                    <p className="p-5">Hello There!! <br/> I am Mohammed Asif.  </p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    return (
        <div>
            <Container className="services" id="services">
            <div className="head-section box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                <h1 className="text-center">I can provide</h1>
            </div>
                <Row>
                    <div className="col-md-4 mb-5">
                        <div className="service-box p-5 bg-light shadow">
                        <h3>Web Design</h3>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="service-box p-5 bg-light shadow">
                        <h3>Web Development</h3>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="service-box p-5 bg-light shadow">
                        <h3>Content Writing</h3>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="service-box p-5 bg-light shadow">
                        <h3>Copy Writing</h3>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="service-box p-5 bg-light shadow">
                        <h3>Graphics Design</h3>
                        </div>
                    </div>
                </Row>
            </Container>
           
        </div>
    );
};

export default Services;
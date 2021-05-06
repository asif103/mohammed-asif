import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" id="top">
            <Container>
                <Navbar.Brand href="#home">Mohammed Asif</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#about">About Me</Nav.Link>
                    <Nav.Link href="#skills">My Skills</Nav.Link>
                    <Nav.Link href="#services">My Services</Nav.Link>
                    <Nav.Link href="/portfolio">My Works</Nav.Link>
                    <Nav.Link href="/blog">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
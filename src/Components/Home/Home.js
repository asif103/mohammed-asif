import React from 'react';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import About from './About/About';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <About></About>
            <Skills></Skills>
            <Services></Services>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;
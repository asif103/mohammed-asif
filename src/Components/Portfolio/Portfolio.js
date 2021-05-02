import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';
import Work from './Work/Work';

const Portfolio = () => {
    const portfolios = [{
        'name': 'name001',
    },
        {
            'name': 'name002',
    }
    ];
    return (
        <div>
            <NavBar></NavBar>
            
            <Footer></Footer>
            
        </div>
    );
};

export default Portfolio;
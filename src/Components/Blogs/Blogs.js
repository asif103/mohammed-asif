import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';
import Blog from './Blog/Blog';

const Blogs = () => {
    const articles = [{
        "title": "Sweet roll gingerbread sweet roll jelly",
        "category": "Cakes",
        "date": "1 Jan 2020"
      },{
        "title": "Bar cupcake chocolate topping brownie",
        "category": "Chocolates",
        "date": "2 Feb 2020"
      },{
        "title": "Powder tootsie roll chocolate sugar",
        "category": "Puddings",
        "date": "3 Mar 2020"
      }];
    return (
        <div>
            <NavBar></NavBar>
            <Container>

            <div className="head-section box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
                <h1 className="text-center">My Articles</h1>
            </div>
                <Row>
            {
                articles.map(article => <Blog blog={ article}></Blog>)
            }
            </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;
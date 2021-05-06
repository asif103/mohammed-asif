import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blog.css'

const Blog = ({ blog}) => {
    const goToLink = (link) => {
        window.location.replace(link)
    }
    return (
        
            <div className="col-md-4 ">
                <div className="card blog-bg shadow">
                <div className="card_title title-black">
                    <p className="p-5 text-center">{blog.title}</p>
                    <p className="text-center"><button onClick ={()=>goToLink('https://facebook.com/asif473')} className="btn btn-outline-danger btn-lg ">Read full content <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                    </p>
                </div>
                </div>
            </div>
        
    );
};

export default Blog;
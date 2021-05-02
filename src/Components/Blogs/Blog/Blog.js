import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blog.css'

const Blog = ({ blog}) => {
    return (
        
            <div className="col-md-4">
                <div className="card 1">
                <div className="card_title title-black">
                    <p className="p-5 text-center">{blog.title}</p>
                    <p className="text-center"><a href="" className="btn btn-outline-warning ">Read full content <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></a>
                    </p>
                </div>
                </div>
            </div>
        
    );
};

export default Blog;
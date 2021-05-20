import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Blog.css';


const Blog = () => {
    return (
        <div className="container mb-5 mt-5 pt-5">
            <div className="text-center mt-5 mb-5">
                <h1>Latest Blog</h1>
            </div>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="blogContainer">
                        <div className="blog">
                            <img className="blogImg" src="https://www.edureka.co/blog/wp-content/uploads/2019/07/javascript-string-function_.jpg" alt="" />
                        </div>
                        <h2 className="p-2">What are the top 20 Javascript String Functions and how to use them?</h2>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="blogContainer">
                        <div className="blog">
                            <img className="blogImg" src="https://www.edureka.co/blog/wp-content/uploads/2019/07/javascript-string-function_.jpg" alt="" />
                        </div>
                        <h2 className="p-2">What are the top 20 Javascript String Functions and how to use them?</h2>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="blogContainer">
                        <div className="blog">
                            <img className="blogImg" src="https://www.edureka.co/blog/wp-content/uploads/2019/07/javascript-string-function_.jpg" alt="" />
                        </div>
                        <h2 className="p-2">What are the top 20 Javascript String Functions and how to use them?</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
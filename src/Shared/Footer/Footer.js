import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
        <div className="container text-center">
            <div className="row">
                <div className="col-md-6">
                    <a className="footerIcon" href="/about" >About</a>
                    <a className="footerIcon" href="/portfolio" >Portfolio</a>
                    <a className="footerIcon" href="/contact" >Contact</a>
                    <a className="footerIcon" href="/blog">Blog</a>
                    <a className="footerIcon" href="/resume">Resume</a>
                </div>

                <div className="col-md-6">
                    <h1>Md. Ashik Pradhan</h1>
                    <div className="socialIcon mt-3 mb-3">
                            <span><a href=""><i className="SocialIcons fab fa-github"></i></a></span>
                            <span><a href="https://www.linkedin.com/in/md-ashik-pradhan-20b904210/"><i className="SocialIcons fab fa-linkedin-in"></i></a></span>
                            <span><i className="SocialIcons fab fa-twitter"></i></span>
                            <span><a href="https://www.facebook.com/wasif.islam.33865"><i className="SocialIcons fab fa-facebook"></i> </a></span>
                    </div>
                <div><p>All Copy Right By ashikpradhan.com</p></div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Typewriter from 'typewriter-effect';
import Contact from '../Contact/Contact';
import './About.css';
import Portfolio from '../Portfolio/Portfolio';
import Blog from '../Blog/Blog';


const About = () => {
    return (
        <div className="bgColor">
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-light">Md. Ashik Pradhan</h1>
                        <Typewriter className="typeWriter"
                        onInit={(typewriter) =>{
                            typewriter.typeString("Modern Web Designer")
                            .pauseFor(2000)
                            .start()
                            .deleteAll()
                            .typeString("Phd To Html")
                            .pauseFor(2000)
                            .start()
                            .deleteAll()
                            .typeString("Mern Stack Developer")
                            .pauseFor(2000)
                            .start()
                            .deleteAll()
                            .typeString("Front End Developer");
                        }}
                        />
                        <div className="socialIcon mt-3 mb-3">
                            <span><a href=""><i className="SocialIcons fab fa-github"></i></a></span>
                            <span><a href="https://www.linkedin.com/in/md-ashik-pradhan-20b904210/"><i className="SocialIcons fab fa-linkedin-in"></i></a></span>
                            <span><i className="SocialIcons fab fa-twitter"></i></span>
                            <span><a href="https://www.facebook.com/wasif.islam.33865"><i className="SocialIcons fab fa-facebook"></i> </a></span>
                        </div>
                        <button className="BrandBtn"><a href="https://drive.google.com/file/d/1P0c56MplUAEaTPvJHF7LtDj0S4bVOkN2/view?usp=sharing">Download Resume</a></button>
                        <p className="text-light">I am a web developer from Bangladesh. I like to learn new technologies of interest and apply them in real life </p>
                    </div>
                    <div className="col-md-6">
                    <img src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="homeImg"/>
                    </div>
                </div>
                <h1 className="text-center mt-5 pt-5"> <span className="text-primary mb-5">M</span>y Services</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="serviceDiv">
                            <h2>Web Design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima.s</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="serviceDiv">
                            <h2>PHD TO HTML</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="serviceDiv">
                            <h2>Mern Stack Developer</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, similique.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Portfolio />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
};

export default About;